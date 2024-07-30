import { Helmet } from "react-helmet-async";
import useProducts from "../../Utilities/useProducts";
import Items from "../Shared/Items/Items";
import Banner from "./Banner/Banner";

const Home = () => {

    const [item] = useProducts();

    return (
        <>
            <Helmet>
                <title>Rimon Electronics - Home</title>
            </Helmet>
            <Banner/>
            <div className="grid md:grid-cols-3 gap-12 mx-4">
                {
                    item.map((product) => <Items
                        key={product._id}
                        product={product}
                    />)
                }
            </div>
        </>
    );
};

export default Home;