// 导入NavBar和Footer组件，以及CSS文件
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import GreenaryContent from '../components/greenaryContent';

export default function Index() {
    return (
        <div>
            <NavBar />
            <GreenaryContent/>
            <Footer />
        </div>
    );
}

