// 导入NavBar和Footer组件，以及CSS文件
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import './learn.css';

export default function Index() {
    return (
        <div>
            <NavBar />
            {/* 第一个Box */}
            <div className="box headingBox">Heading 1</div>
            {/* 第二个Box */}
            <div className="box contentBox">
                <div className="imageText">
                    <img src="/path/to/image1.jpg" alt="Image 1" />
                    <div>
                        <h3>Small Heading 1</h3>
                        <p>Description for image 1...</p>
                    </div>
                </div>
                {/* 重复上面的结构两次，修改src, h3和p内容 */}
                {/* ... */}
            </div>
            {/* 第三个Box */}
            <div className="box headingBox">Heading 2</div>
            {/* 第四个Box */}
            <div className="box contentBox">
                <div className="imageTextSingle">
                    <img src="/path/to/image2.jpg" alt="Image 2" />
                    <p>Description for the image...</p>
                </div>
            </div>
            <div className="box headingBox">Heading 2</div>
            {/* 第六个Box */}
            <div className="box contentBox">
                <div className="imageTextSingle">
                    <img src="/path/to/image2.jpg" alt="Image 2" />
                    <p>Description for the image...</p>
                </div>
            </div>
            <div className="box headingBox">Heading 2</div>
            {/* 第八个Box */}
            <div className="box contentBox">
                <div className="imageTextSingle">
                    <img src="/path/to/image2.jpg" alt="Image 2" />
                    <p>Description for the image...</p>
                </div>
            </div>
            

            
            <Footer />
        </div>
    );
}

