import useProducts from "../../Utilities/useProducts";

const Home = () => {

    const [item] = useProducts();

    return (
        <div>
            <h1>Homepage</h1>
        </div>
    );
};

export default Home;