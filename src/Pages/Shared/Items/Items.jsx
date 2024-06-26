const Items = ({ product }) => {

    const { name, image, category, price, description } = product

    return (
        <div className="card bg-base-100 w-96 shadow-xl mt-4">
            <figure>
                <img style={{ width: "500px", height: "500px" }}
                    src={image} alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-center font-bold mt-4">
                    <div className="badge badge-outline">{category}</div>
                    <div className="badge badge-outline">$ {price}</div>
                </div>
            </div>
            <button className="btn btn-outline btn-primary m-2">Add to Cart</button>
        </div>
    );
};

export default Items;