import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar />
            <div className='min-h-screen bg-gray-300 bg-opacity-30'>
                <Outlet></Outlet>
            </div>
            <Footer />
        </div>
    );
};

export default Main;