import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import axios from 'axios'; // 确保已经安装 axios

const StackedLineChart = () => {
  const [option, setOption] = useState({});

  useEffect(() => {
    // 从你的Flask后端获取数据
    axios.get('http://127.0.0.1:5000/data/temperature').then((response) => {
      const data = response.data;
      // 处理数据，生成ECharts配置
      const years = data.summer.map(item => item.YearGroup);
      const summerData = data.summer.map(item => item.avg_max_temp);
      const winterData = data.winter.map(item => item.avg_max_temp);

      const option = {
        title: {
          text: 'Average Maximum Temperature by Year'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['Summer', 'Winter']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: years
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'Summer',
            type: 'line',
            stack: 'Total',
            data: summerData
          },
          {
            name: 'Winter',
            type: 'line',
            stack: 'Total',
            data: winterData
          }
        ]
      };

      setOption(option);
    });
  }, []);

  return <ReactECharts option={option} />;
};

export default StackedLineChart;
