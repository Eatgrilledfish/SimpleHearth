// 导入NavBar和Footer组件，以及CSS文件
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import EnergyContent from '../components/EnergyContent';

export default function Index() {
    return (
        <div>
            <NavBar />
            <EnergyContent/>
            <Footer />
        </div>
    );
}

