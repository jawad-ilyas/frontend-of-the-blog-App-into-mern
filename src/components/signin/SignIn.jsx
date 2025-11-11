import { useState } from "react";
import { Input } from "../index"
import { useForm } from "react-hook-form"
import { FormError } from "../index";
import { useDispatch } from "react-redux";
import { googleSignUp, signInUser, signUpUser } from "../../features/authSlice/authSlice";
import { toast } from "react-toastify";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, watch, reset, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false)

  const onSubmitHanlder = (data) => {
    console.log('====================================');
    console.log("SignIn :: onSubmitHanlder :: data ", data);
    console.log('====================================');
    dispatch(signInUser(data))
      .then((res) => {

        if (res?.payload?.success) {
          // reset();
          // navigate("/signin")

        }
        else {
          toast.error("❌" + res?.payload?.error);

        }
      }).catch((err) => {
        console.log("signup :: signUp :: err :: ", err);

      })
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-200 to-orange-100">
      <form
        onSubmit={handleSubmit(onSubmitHanlder)}
        className="backdrop-blur-xl bg-white/40 border border-white/50 shadow-lg p-8 rounded-2xl w-80 flex flex-col gap-4"
      >
        <h2 className="text-2xl font-semibold text-rose-800 text-center mb-3">
          Welcome Back 👋
        </h2>

        <div>
          <Input label="Email: " name="email" type="text" placeholder="Jone Doe" className="" {...register("email", { required: "email  is required " })} />
          <FormError error={errors?.email} />
        </div>
        <div>
          <div className="relative">
            <Input
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Your Password"
              {...register("password", { required: "Password is required" })}
            />
            <button
              type="button"
              className="absolute right-2 top-9"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          <FormError error={errors?.password} />

        </div>


        <button
          type="submit"
          className="bg-gradient-to-r from-rose-500 to-orange-400 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition"
        >
          Login / Sign In
        </button>
      </form>
    </div>
  );
}


export default SignIn