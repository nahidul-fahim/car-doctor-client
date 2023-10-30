import { useLoaderData } from "react-router-dom";


const CheckOut = () => {

    const serviceData = useLoaderData();
    const { title, price, _id, img } = serviceData;


    const handleCheckout = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const price = form.price.value;
        const date = form.date.value;

        const bookingDetails = { service_id: _id, customerName: name, email, phone, price, date, service: title, img }

        console.log(bookingDetails);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }


    return (
        <div>
            <h2 className="text-3xl font-bold text-sub text-center">Book Service: <span className="text-main">{title}</span></h2>

            <div className="mt-[70px] flex flex-col justify-center items-center w-full">
                <form onSubmit={handleCheckout} className="w-2/4 space-y-8">
                    <input type="text" name="name" id="name" placeholder="Enter full name" className="focus:outline-none px-5 py-3 rounded border-[1px] border-[lightgray] focus:border-[gray] w-full" />
                    <input type="email" name="email" id="email" placeholder="Enter email" className="focus:outline-none px-5 py-3 rounded border-[1px] border-[lightgray] focus:border-[gray] w-full" />
                    <input type="tel" name="phone" id="phone" placeholder="Enter phone number" className="focus:outline-none px-5 py-3 rounded border-[1px] border-[lightgray] focus:border-[gray] w-full" />

                    <div className="flex justify-between items-center gap-10">
                        <input type="text" name="price" id="price" defaultValue={'$' + price} placeholder="Due amount" className="focus:outline-none px-5 py-3 rounded border-[1px] border-[lightgray] focus:border-[gray] w-1/2 font-semibold" />
                        <input type="date" name="date" id="date" className="focus:outline-none px-5 py-3 rounded border-[1px] border-[lightgray] focus:border-[gray] w-1/2" />
                    </div>

                    <input type="submit" value="Cofirm Order" className="bg-main text-white px-5 py-3 rounded w-full font-semibold uppercase border-2 border-main hover:bg-white hover:text-main duration-500" />
                </form>
            </div>
        </div>
    );
};

export default CheckOut;