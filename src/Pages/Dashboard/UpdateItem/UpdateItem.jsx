import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../../Utilities/useAxiosPublic";
import useAxiosSecure from "../../../Utilities/useAxiosSecure";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const image_hosting_key = import.meta.env.VITE_IMG_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdateItem = () => {

    const { name, category, price, description, _id } = useLoaderData()
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            const pItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                description: data.description,
                image: res.data.data.display_url
            }

            const menuRes = await axiosSecure.patch(`/item/${_id}`, pItem);
            if (menuRes.data.modifiedCount > 0) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${data.name} has been updated to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                });
                reset();
            }
        }
    };

    return (
        <div>
            <SectionTitle heading="update an item" subHeading="Refresh Info"></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Product Name*</span>
                            </div>
                            <input
                                {...register("name", { required: true })}
                                type="text"
                                defaultValue={name}
                                placeholder="Product Name"
                                className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="flex gap-6">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Category*</span>
                            </div>
                            <select defaultValue={category} {...register('category', { required: true })}
                                className="select select-primary w-full">
                                <option disabled value="default">Select a category</option>
                                <option value="fridge">Fridge</option>
                                <option value="tv">TV</option>
                                <option value="ac">AC</option>
                                <option value="cooker">Rice Coocker</option>
                            </select>
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Price*</span>
                            </div>
                            <input
                                {...register("price", { required: true })}
                                type="number"
                                defaultValue={price}
                                placeholder="Price"
                                className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Description</span>
                            </div>
                            <textarea defaultValue={description} {...register("description")} className="textarea textarea-bordered h-24" placeholder="Description"></textarea>
                        </label>
                    </div>

                    <div className="form-control w-full my-4">
                        <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered file-input-sm w-full max-w-xs" />
                    </div>

                    <button className="btn btn-active">
                        Update Item
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;