import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Electricians from "./Electricians/Electricians";

const Home = () => {

    return (
        <>
            <Helmet>
                <title>Rimon Electronics - Home</title>
            </Helmet>
            <Banner/>
            <Electricians/>
        </>
    );
};

export default Home;