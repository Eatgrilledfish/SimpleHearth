from flask import Flask,request,jsonify
from flask_restx import Api, Resource,fields, reqparse
from flask_cors import CORS
import mysql.connector
import geopandas as gpd
import matplotlib.pyplot as plt 
import json
import requests
import datetime

app = Flask(__name__)
CORS(app)

api = Api(app, 
          version='1.0', 
          title='Sample API',
          description='A sample API using Flask-RESTx and Swagger UI')

ns = api.namespace('data', description='Data operations')
db_config = {
    'user': 'remote_user',
    'password': 'Sunnypediag13!',
    'host': '13.237.185.73',
    'port': 3306,
    'database': 'Mysql',
    'raise_on_warnings': True,
}
CLIENT_ID = '721d1e483d9f489'
from werkzeug.datastructures import FileStorage

# 创建一个解析器
upload_parser = reqparse.RequestParser()
upload_parser.add_argument('file', location='files', type=FileStorage, required=True, help="The file to upload")




@ns.route('/temperature')
class Temperature(Resource):
    def get(self):
        """Return the average max temperature for summer and winter by year"""
        try:
            conn = mysql.connector.connect(**db_config)
            cursor = conn.cursor(dictionary=True)

            # 夏季平均最高温度
            cursor.execute("""
            SELECT
                IF(Month = 12, Year + 1, Year) AS YearGroup,
                AVG(`Mean maximum temperature (°C)`) AS avg_max_temp
            FROM temperature_data
            WHERE Month = 12 OR Month <= 2
            GROUP BY YearGroup;
            """)
            summer_avg_temp = cursor.fetchall()

            # 冬季平均最高温度
            cursor.execute("""
            SELECT
                Year,
                AVG(`Mean maximum temperature (°C)`) AS avg_max_temp
            FROM temperature_data
            WHERE Month >= 6 AND Month <= 8
            GROUP BY Year;
            """)
            winter_avg_temp = cursor.fetchall()

            cursor.close()
            conn.close()
            data = {
                "summer": summer_avg_temp,
                "winter": winter_avg_temp,
            }

            return data
        
        except mysql.connector.Error as err:
            return {"error": str(err)}, 500
        
@ns.route('/heatmap')
class heatmap(Resource):
    def get(self):
        file_path = "/Users/jianqiao/myproject/SimpleHearth/backend/data/PLANNING/HEAT_URBAN_HEAT_2018.shp"
        heat_data = gpd.read_file(file_path)
        uhi_data = heat_data[["SA2_NAME16", "UHI18_M", "geometry"]]
        # Convert GeoDataFrame to GeoJSON
        uhi_json = uhi_data.to_json()
        
        # Parse the string of GeoJSON to a Python dict
        uhi_dict = json.loads(uhi_json)
        
        return jsonify(uhi_dict)
    
@ns.route('/houseyear')
class Houseyear(Resource):    
    @api.doc(params={'street': 'The name of the street'})
    def get(self):
        user_input_street = request.args.get('street', None)
        if not user_input_street:
            return {"message": "Street name is required"}, 400
        base_api_url = "https://data.melbourne.vic.gov.au/api/explore/v2.1/"
        get_token_url = f'{base_api_url}catalog/datasets/buildings-with-name-age-size-accessibility-and-bicycle-facilities/records?where=street_address%20like%20%22%25{user_input_street}%25%22&limit=1'
        try:
            response = requests.get(get_token_url)
            response.raise_for_status()
            token_data = response.json()

            if token_data['results']:
                result = token_data['results'][0]
                current_year = datetime.datetime.now().year
                
                # Extract the street_address, construction_year, and refurbished_year
                street_address = result.get('street_address')
                construction_year = result.get('construction_year')
                refurbished_year = result.get('refurbished_year')
                house_age = current_year - int(construction_year) if construction_year else 'Unknown'

                return jsonify({
                    "Street Address": street_address,
                    "Construction Year": construction_year,
                    "Refurbished Year": refurbished_year,
                    "House Age": house_age
                })
            else:
                return {"message": "No results found for the given street name"}, 404

        except requests.RequestException as e:
            return {"message": str(e)}, 500

@ns.route('/upload')
class Upload(Resource):
    def post(self):
        """Upload image to Imgur"""
        if 'file' not in request.files:
            return {'message': 'No file part'}, 400
        
        file = request.files['file']
        if file.filename == '':
            return {'message': 'No selected file'}, 400
        
        headers = {'Authorization': f'Client-ID {CLIENT_ID}'}
        files = {'image': (file.filename, file, 'multipart/form-data')}
        response = requests.post('https://api.imgur.com/3/image', headers=headers, files=files)
        img_addr = response.json()['data']['link']
        print(img_addr)

        url = "https://openai.api2d.net/v1/chat/completions"

        headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer fk225497-d0gmSYGb0UiL9F0HzlZCwsOPLnGk16kh'
        }

        data = {
            "model": "gpt-4-vision-preview",
            "messages": [
                {
                    "role": "user",
                    "content": f"describe this image. This is the image: {img_addr}"
                }
            ],
            "safe_mode": False,
            "max_tokens": 800
        }

        gpt_response = requests.post(url, headers=headers, json=data)
        
        if gpt_response.status_code == 200:
            response_data = gpt_response.json()
            # 从返回的JSON中提取模型的输出
            report_content = response_data['choices'][0]['message']['content']
            return jsonify({"report":report_content})
        else:
            return {'message': 'Failed to generate report'}, 500

@ns.route('/uploads')
class Upload(Resource):
    @ns.expect(upload_parser)
    def post(self):
        """Upload image to Imgur"""
        args = upload_parser.parse_args()
        uploaded_file = args['file']  # 通过解析器获取文件

        if uploaded_file:
            filename = uploaded_file.filename
            if filename == '':
                return {'message': 'No selected file'}, 400

            headers = {'Authorization': f'Client-ID {CLIENT_ID}'}
            files = {'image': (filename, uploaded_file, 'multipart/form-data')}
            response = requests.post('https://api.imgur.com/3/image', headers=headers, files=files)
            
            if response.status_code == 200:
                data = response.json()
                return {'url': data['data']['link']}
            else:
                return {'message': 'Upload failed'}, 500
        else:
            return {'message': 'No file part'}, 400

if __name__ == '__main__':
    app.run(debug=True)
