import { useContext } from "react";
import { AuthCont } from "../../Context/AuthContext/AuthContext";
import { useEffect } from "react";
import { useState } from "react";
import SingleCartRow from "./SingleCartRow";


const MyCart = () => {

    const { currentUser } = useContext(AuthCont);

    const [bookingData, setBookinData] = useState([])

    useEffect(() => {

        const userEmail = currentUser?.email;

        fetch(`http://localhost:5000/cart/${userEmail}`)
            .then(res => res.json())
            .then(data => {
                setBookinData(data);
                console.log(data)
            })
    }, [currentUser?.email]);


    return (
        <div>
            <h2 className="text-4xl font-bold">Total bookings: {bookingData.length}</h2>

            {/* Table */}

            <div className="overflow-x-auto mt-16">
                <table className="table">

                    <tbody>

                        {
                            bookingData.map(singleBooking => <SingleCartRow
                                key={singleBooking._id}
                                singleBooking={singleBooking}></SingleCartRow>)
                        }

                    </tbody>



                </table>
            </div>



        </div>
    );
};

export default MyCart;