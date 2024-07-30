import useElectrician from "../../../Utilities/useElectrician";
import Electrician from "./Electrician";

const Electricians = () => {

    const [electrician] = useElectrician()

    return (
        <div>
            <h2 className="text-4xl font-extrabold text-center mt-6 mb-3">Our Technicians Profile</h2>
            {
                electrician.map((person) => <Electrician
                    key={person._id}
                    person={person}
                />)
            }
        </div>
    );
};

export default Electricians;