const Electrician = ({ person }) => {

    const { name, image, category, work_description, experience } = person

    return (
        <div className="my-4">
            <div className="card bg-sky-50 w-3/4 shadow-xl mx-auto">
                <figure className='rounded-full w-fit mx-auto my-3'>
                    <img
                        className="w-[500px] h-[500px]"
                        src={image} />
                </figure>
                <div className="card-body text-center text-gray-700">
                    <h2 className="text-2xl font-bold">{name}</h2>
                    <p className="font-semibold">Category: {category} Technician</p>
                    <p className="font-semibold">Experience:  {experience}</p>
                    <p className="font-semibold w-1/2 mx-auto">{work_description}</p>
                </div>
            </div>
        </div>
    );
};

export default Electrician;