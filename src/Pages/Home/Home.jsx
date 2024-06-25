import useProducts from "../../Utilities/useProducts";
import Products from "../Shared/Product/Products";

const Home = () => {

    const [item] = useProducts();

    return (
        <div className="grid md:grid-cols-3 gap-4">
            {
                item.map((product) =><Products
                key={product._id}
                product={product}
                />)
            }
        </div>
    );
};

export default Home;