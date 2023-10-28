import { Link } from 'react-router-dom';
import loginBanner from '../../assets/images/login/login.svg';
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useState } from 'react';
import { useContext } from 'react';
import { AuthCont } from '../../Context/AuthContext/AuthContext';

const Signup = () => {

    const { createNewUser } = useContext(AuthCont);

    const [showPassword, setShowPassword] = useState(true);


    // const createNewUser = (email, password) => {
    //     console.log(email, password, "function working")
    // }


    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        // const name = form.name.value
        const email = form.email.value;
        const password = form.password.value;

        createNewUser(email, password)
            .then(result => console.log(result.user))
            .catch(error => console.log(error.code, error.message))
    };

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };



    return (
        <div>
            <div className="hero mt-10">
                <div className="hero-content flex-col lg:flex-row gap-10 justify-between items-center">
                    <div className="text-center lg:text-left w-1/2">
                        <img src={loginBanner} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-1/2 p-5">
                        <h1 className="text-4xl font-bold text-center">Sign Up</h1>

                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input required name='name' type="text" placeholder="full name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input required name='email' type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className='w-full relative flex justify-center items-center'>
                                    <input required name='password' type={showPassword ? 'password' : 'text'} placeholder="password" className="input input-bordered w-full" />
                                    <div onClick={handleShowPassword} className='absolute right-3 cursor-pointer'>
                                        {
                                            showPassword ? <AiFillEye /> : <AiFillEyeInvisible />
                                        }
                                    </div>

                                </div>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-main text-white hover:bg-white hover:text-main duration-500">Sign up</button>
                            </div>
                        </form>
                        <h4 className='text-center font-semibold'>Already have an account? <span className='text-main hover:border-b-2 border-main'><Link to="/login">Login</Link></span></h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;