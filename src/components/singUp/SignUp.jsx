import React, { useState } from "react";
import { Input } from "../index"
import { useForm } from "react-hook-form"
import { FormError } from "../index";
import { useDispatch } from "react-redux";
import { googleSignUp, signUpUser } from "../../features/authSlice/authSlice";
import { toast } from "react-toastify";
import { GoogleLogin } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc"; // Google icon
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm()
    const [showPassword, setShowPassword] = useState(false)
    const [showPasswordConform, setShowPasswordConform] = useState(false)

    // function used for the sign up user 

    const dispatch = useDispatch();
    const signUpHandler = (data) => {

        console.log('====================================');
        console.log("sign Up :: signUpHandler :: data", data);
        console.log('====================================');
        dispatch(signUpUser(data))
            .then((res) => {
                console.log('====================================');
                console.log("res " , res);
                console.log('====================================');

                if (res?.payload?.success) {
                    reset();
                    navigate("/signin")

                }
                else {
                    toast.error("❌" + res?.payload?.error);

                }
            }).catch((err) => {
                console.log("signup :: signUp :: err :: ", err);

            })
    }

    const handleGoogleLoginSuccess = (credentialResponse) => {
        console.log('====================================');
        console.log("sign Up :: handleGoogleLoginSuccess :: Google credential", credentialResponse.credential);
        console.log('====================================');
        dispatch(googleSignUp(credentialResponse?.credential))
            .then((res) => {
                console.log("sign Up :: handleGoogleLoginSuccess ::res", res);

                if (res?.payload?.success) {
                    navigate("/signin")
                    // reset();
                }
                else {
                    toast.error("❌ Again Sign Up");
                }
            })
            .catch((err) => {
                console.log("signup :: handleGoogleLoginSuccess :: err :: ", err);
                toast.error("❌ Again Sign Up");

            })

        // Here you can send credential to your backend
        // fetch("/api/auth/google-login", { ... })
    };

    const handleGoogleLoginError = () => {
        console.log("Google login failed");
        toast.error("Google login failed");

    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-100 via-orange-200 to-rose-100 p-6 relative overflow-hidden">

            {/* soft glass overlay shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -left-24 top-10 w-[300px] h-[300px] bg-rose-200/30 rounded-full blur-3xl" />
                <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-orange-300/30 rounded-full blur-3xl" />
            </div>

            <div className="relative w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center z-10">

                {/* Left Side — Blog aesthetic intro */}
                <section className="hidden md:flex flex-col justify-center pl-8 pr-4 space-y-6">
                    <h2 className="text-4xl font-serif text-rose-900 leading-tight">
                        Join Our Writing Community
                    </h2>
                    <p className="text-lg text-rose-800/80 font-light">
                        Share your voice, discover new stories, and connect with like-minded readers and writers.
                    </p>

                    <ul className="space-y-4 text-rose-900/80">
                        <li className="flex items-center gap-3">
                            <span className="text-2xl">🖋️</span>
                            Publish your thoughts and ideas.
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-2xl">💬</span>
                            Engage with a growing community of creators.
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-2xl">✨</span>
                            Customize your profile and showcase your blogs.
                        </li>
                    </ul>
                </section>

                {/* Right Side — Glass registration card */}
                <main className="relative p-6 md:p-10">
                    <div className="mx-auto max-w-md">
                        <div className="rounded-2xl bg-white/40 backdrop-blur-xl border border-white/50 shadow-lg p-8 md:p-10">
                            <div className="mb-6 text-center">
                                <h3 className="text-3xl font-serif text-rose-900 mb-1">Create Your Account</h3>
                                <p className="text-sm text-rose-800/70">
                                    Start your journey as a blogger today.
                                </p>
                            </div>

                            {/* FORM FIELDS (UI Only) */}
                            <form className="space-y-5" onSubmit={handleSubmit(signUpHandler)}>
                                <div>
                                    <Input label="Full Name : " name="fullName" type="text" placeholder="Jone Doe" className="" {...register("fullName", { required: "full name  is required " })} />
                                    {/* {errors?.fullName && <span>{errors?.fullName?.message}{console.log(errors?.fullName?.message)}</span>} */}
                                    <FormError error={errors?.fullName} />
                                </div>

                                <div>
                                    <Input label="Email : " name="email" type="email" placeholder="one@gmail.com" className="" {...register("email", { required: "Email is required " })} />
                                    {/* {errors?.email && <span>{errors?.email?.message}</span>} */}
                                    <FormError error={errors?.email} />

                                </div>

                                <div>
                                    <Input onClick={() => setShowPassword(!showPassword)} label="password  : " name="password" type={showPassword ? "text" : "password"} placeholder="Your Password " className=""  {...register("password", { required: true })} />
                                    {/* {errors?.password && <span>{errors?.password?.message}</span>} */}
                                    <FormError error={errors?.password} />

                                </div>

                                <div>
                                    <Input
                                        onClick={() => setShowPasswordConform(!showPasswordConform)}
                                        label="Confirm Password :"
                                        type={showPasswordConform ? "text" : "password"}
                                        name="confirmPassword"

                                        placeholder="Confirm Password"
                                        {...register("confirmPassword", {
                                            required: "Confirm Password is required",
                                            validate: (value) =>
                                                value === watch("password") || "Passwords do not match",
                                        })}
                                    />
                                    <FormError error={errors?.confirmPassword} />



                                </div>

                                <button
                                    type="submit"
                                    className="w-full rounded-lg py-2.5 font-semibold text-white shadow-md bg-gradient-to-r from-rose-500 to-orange-400 hover:opacity-90 transition"
                                >
                                    Sign Up
                                </button>

                                <div className="relative mt-6">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-rose-300/40" />
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="bg-white/60 px-3 text-rose-700/70">or continue with</span>
                                    </div>
                                </div>

                                {/* social buttons */}
                                <div className="grid grid-cols-1 gap-3 mt-3">
                                    <GoogleLogin
                                        onSuccess={handleGoogleLoginSuccess}
                                        onError={handleGoogleLoginError}

                                        render={(renderProps) => (
                                            <button
                                                onClick={renderProps.onClick}
                                                disabled={renderProps.disabled}
                                                className="flex items-center justify-center gap-2 w-full rounded-lg bg-white/90 border border-rose-200 py-2 text-sm font-medium text-rose-900 hover:bg-white transition"
                                            >
                                                <FcGoogle size={20} /> {/* Google icon */}
                                            </button>
                                        )}
                                    />

                                    <button className="rounded-lg bg-white/70 border border-rose-200 py-2 text-sm text-rose-900 hover:bg-white">
                                        GitHub
                                    </button>
                                    <button className="rounded-lg bg-white/70 border border-rose-200 py-2 text-sm text-rose-900 hover:bg-white">
                                        Twitter
                                    </button>
                                </div>

                                <p className="text-xs text-rose-800/70 text-center pt-4">
                                    By creating an account, you agree to our{" "}
                                    <a className="underline" href="#">Terms</a> and{" "}
                                    <a className="underline" href="#">Privacy Policy</a>.
                                </p>
                            </form>
                        </div>

                        {/* footer */}
                        <div className="mt-4 text-xs text-rose-800/70 text-center">
                            Already a member?{" "}
                            <a href="#" className="text-rose-600 font-semibold underline">
                                Sign in
                            </a>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default SignUp