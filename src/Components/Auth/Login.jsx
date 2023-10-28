import { Link } from 'react-router-dom';
import loginBanner from '../../assets/images/login/login.svg';
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useState } from 'react';

const Login = () => {

    const [showPassword, setShowPassword] = useState(true);


    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }


    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }


    return (
        <div>
            <div className="hero mt-10">
                <div className="hero-content flex-col lg:flex-row gap-10 justify-between items-center">
                    <div className="text-center lg:text-left w-1/2">
                        <img src={loginBanner} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-1/2 p-5">
                        <h1 className="text-4xl font-bold text-center">Login now!</h1>

                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className='w-full relative flex justify-center items-center'>
                                    <input name='password' type={showPassword ? 'password' : 'text'} placeholder="password" className="input input-bordered w-full" />
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
                                <button className="btn bg-main text-white hover:bg-white hover:text-main duration-500">Login</button>
                            </div>
                        </form>
                        <h4 className='text-center font-semibold'>{'Don\'t'} have an account? <span className='text-main hover:border-b-2 border-main'><Link to="/signup">Sign up</Link></span></h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;