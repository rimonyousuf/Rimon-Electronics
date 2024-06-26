import useProducts from "../../Utilities/useProducts";
import Items from "../Shared/Items/Items";

const Home = () => {

    const [item] = useProducts();

    return (
        <div className="grid md:grid-cols-3 gap-12 mx-4">
            {
                item.map((product) =><Items
                key={product._id}
                product={product}
                />)
            }
        </div>
    );
};

export default Home;