import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleService = ({ singleService }) => {

    const { _id, title, img, price, } = singleService;


    return (
        <div className="flex flex-col justify-center items-start gap-5 border-[1px] border-[#e4e4e4] p-6 rounded-xl">
            <img src={img} alt="" className="rounded-xl" />
            <h2 className="text-2xl font-bold text-sub">{title}</h2>
            <div className="flex w-full justify-between items-center">
                <h3 className="text-xl font-bold text-main">Price: ${price}</h3>
                <div className="border-[#ffffff00] border-2 hover:border-2 rounded-[100%] hover:border-main hover:text-main p-3 duration-500 cursor-pointer">
                    <Link to={`checkout/${_id}`}><button><FaArrowRight className=" text-main" /></button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleService;