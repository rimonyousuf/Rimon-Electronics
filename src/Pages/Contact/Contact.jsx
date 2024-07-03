import { MdOutlineMail } from 'react-icons/md';
import contact_image from '../../assets/contact-back.webp';
import './Contact.css'
import { FaLocationDot } from 'react-icons/fa6';
import { FaMobileAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <div>
            <div
                className="hero height"
                style={{
                    backgroundImage: `url(${contact_image})`,
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="w-3/4">
                        <h1 className="mb-5 text-5xl font-bold">Contact With Me</h1>
                        <p className="mb-5 text-lg">
                            I am a passionate MERN Stack Developer fresh to the field, dedicated to crafting innovative web solutions with MongoDB, Express.js, React.js, and Node.js. Eager to contribute fresh perspectives and enthusiasm to collaborative projects. Continuously learning and adapting to industry trends. Let's connect and explore opportunities to create impactful solutions together!
                        </p>
                    </div>
                </div>
            </div>

            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-1/2 shrink-0 shadow-2xl p-8">
                        <h2 className='text-4xl font-bold text-center mb-3'>Reach Out To Me!</h2>
                        <p className='text-center text-gray-600'>I'm present 24*7 for my clients; get in touch with me <br /> and scale your business with flooding revenues!</p>
                        <form className="card-body">
                            <div className="form-control mb-3">
                                <input type="text" placeholder="Full Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control mb-3">
                                <input type="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control mb-3">
                                <input type="text" placeholder="Mobile Number With Country Code" className="input input-bordered" required />
                            </div>
                            <div className="form-control mb-3">
                                <textarea
                                    placeholder="Your Message"
                                    className="textarea textarea-bordered"
                                    rows="5"
                                    required
                                ></textarea>
                            </div>
                            <div className="form-control mt-6 w-1/2 mt-0 mx-auto">
                                <button className="btn btn-error text-white">Submit</button>
                            </div>
                        </form>
                    </div>

                    <div className="text-2xl w-full lg:text-left mr-8">
                        <div className='flex items-center gap-3 mb-8'>
                            <FaLocationDot className='text-4xl mr-2'></FaLocationDot>
                            <div>
                                <p className='font-bold'>Address</p>
                                <p className='truncate w-full lg:w-auto text-gray-600 text-lg'>Boro Bazar,Meherpur Sadar,7100,Meherpur</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-3 mb-8'>
                            <MdOutlineMail className='text-4xl mr-2'></MdOutlineMail>
                            <div>
                                <p className='font-bold'>Email</p>
                                <p className='truncate w-full lg:w-auto text-gray-600 text-lg'>yasiryousufrimon1@gmail.com</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-3 mb-8'>
                            <FaMobileAlt className='text-4xl mr-2'></FaMobileAlt>
                            <div>
                                <p className='font-bold'>Call Me</p>
                                <p className='truncate w-full lg:w-auto text-gray-600 text-lg'>+880-1938969920</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;