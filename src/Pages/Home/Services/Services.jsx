import { useEffect, useState } from "react";
import SingleService from "./SingleService";


const Services = () => {

    const [services, setServices] = useState([])


    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);



    return (
        <div className="flex flex-col gap-5 justify-center items-center">
            <h3 className='text-xl font-bold text-main text-center'>Service</h3>
            <h2 className='text-4xl font-bold text-sub w-[50%] text-center'>Our Service Area</h2>
            <p className='text-base text-gray w-[60%] text-center'>the majority have suffered alteration in some form, by injected humour, or randomised words which {'don\'t'} look even slightly believable. </p>

            <div className="grid grid-cols-3 gap-10">
                {
                    services.map(singleService => <SingleService
                        key={singleService._id}
                        singleService={singleService}>
                    </SingleService>
                    )
                }
            </div>
            <button className="text-base px-4 py-2 rounded font-semibold border-2 border-main bg-white text-main hover:bg-main duration-500 hover:text-white">More Services</button>
        </div>
    );
};

export default Services;