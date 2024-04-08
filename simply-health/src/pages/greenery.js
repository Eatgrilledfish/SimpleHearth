// 导入NavBar和Footer组件，以及CSS文件
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import LearnContent from '../components/LearnContent';

export default function Index() {
    return (
        <div>
            <NavBar />
            <LearnContent/>
            <Footer />
        </div>
    );
}

