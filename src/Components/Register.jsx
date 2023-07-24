import { Link } from "react-router-dom";
import Lottie from 'react-lottie';
import animation from './../../loginanimation.json'
import React, { useContext, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const { createUser, popupRegister } = useContext(AuthContext);
    const [error, setError] = useState('');
    const provider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();


    const handelRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        if (password.length < 6) {
            setError('password must be 6 caracter')
        }
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser)
                setError('');
            })
            .catch(error => setError(error.message))
        form.reset();
        console.log(name, photo, email, password);


    }

    const googleSigned = () => {
        popupRegister(provider)
            .then(result => {
                const logged = result.user;
                console.log(logged);
                setError('')
            })
            .catch(error => setError(error))
    }

    const gitSigned = () => {
        popupRegister(gitProvider)
            .then(result => {
                const loggedG = result.user;
                console.log(loggedG);
                setError('')
            })
            .catch(error => setError(error))
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <Lottie options={defaultOptions}></Lottie>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handelRegister}>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="input input-bordered"
                                        name="name"
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Your Photo"
                                        className="input input-bordered"
                                        name="photo"
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="email"
                                        className="input input-bordered"
                                        name="email"
                                        required
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="password"
                                        className="input input-bordered"
                                        name="password"
                                    />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">
                                            Forgot password?
                                        </a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                                <div>
                                    <p onClick={googleSigned} className="cursor-pointer">
                                        <img src="google-signin-button.png" alt="" />
                                    </p>
                                    <p onClick={gitSigned} className="cursor-pointer">
                                        <img src="githubbtn.png" alt="" />
                                    </p>
                                </div>
                            </div>
                        </form>
                        <div className="my-4 ml-8 text-red-500">
                            <small>
                                <p>{error}</p>
                            </small>
                        </div>
                        <p className="my-4 ml-8">
                            <small>
                                Already Have an Account? <Link to="/login">Login</Link>{" "}
                            </small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;