

const SingleCartRow = ({ singleBooking, handleDeleteCartItem, handleBookingConfirm }) => {

    const { service, price, img, date, _id, status } = singleBooking;


    return (
        <tr className="w-full flex justify-between items-center">
            <td className="w-[5%]">
                <button onClick={() => handleDeleteCartItem(_id)} className="btn btn-circle btn-outline btn-sm hover:bg-main hover:text-white hover:border-main">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </td>
            <td className="w-[25%]">
                <div className="flex items-center space-x-3">
                    {
                        img && <img src={img} alt="Avatar Tailwind CSS Component" className="rounded-lg" />
                    }
                </div>
            </td>
            <td className="w-[25%]">
                <h3 className="text-[18px] font-bold">{service}</h3>
            </td>
            <td className="w-[15%] font-bold">{price}</td>
            <td className="w-[15%] font-bold">{date}</td>
            <td className="w-[15%]">
                {
                    status === "confirm" ? <span className="font-bold uppercase bg-[#108019] px-5 py-3 rounded text-white">Confirmed</span>
                        :
                        <button onClick={() => handleBookingConfirm(_id)} className="btn bg-main px-5 py-3 rounded text-white hover:bg-white hover:text-main duration-500">Confirm</button>
                }
            </td>
        </tr>
    );
};

export default SingleCartRow;