import { useContext } from "react";
import { AuthCont } from "../../Context/AuthContext/AuthContext";
import { useEffect } from "react";
import { useState } from "react";


const MyCart = () => {

    const { currentUser, loading } = useContext(AuthCont);

    const [bookingData, setBookinData] = useState([])


    console.log(currentUser);

    useEffect(() => {

        const userEmail = currentUser?.email;

        fetch(`http://localhost:5000/cart/${userEmail}`)
            .then(res => res.json())
            .then(data => {
                setBookinData(data);
                console.log(data)
            })
    }, [currentUser?.email]);

    if (loading) {
        return <span className="loading loading-ring loading-lg text-main"></span>
    }

    console.log("all the booking data", bookingData);

    return (
        <div>
            <h2 className="text-4xl font-bold">Total bookings: {bookingData.length}</h2>
        </div>
    );
};

export default MyCart;