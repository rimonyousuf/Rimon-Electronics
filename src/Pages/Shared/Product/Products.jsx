const Products = ({ product }) => {

    const {name,image,category,price} = product

    return (
        <div className="card bg-base-100 w-96 shadow-xl mt-4">
            <figure>
                <img
                    src={image} alt=""/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{category}</div>
                    <div className="badge badge-outline">$ {price}</div>
                </div>
            </div>
        </div>
    );
};

export default Products;