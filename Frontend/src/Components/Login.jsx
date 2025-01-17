import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) =>{
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Loggedin Successfully!");
          setTimeout(() => {
            document.getElementById("my_modal_3").close();
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 1000);

        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
          setTimeout(() => {
          }, 2000);
        }
      });
  }
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-white"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>
            <h3 className="font-bold text-lg">Login</h3>
            <div className="mt-4 space-y-4">
              <span>Email</span>
              <br />
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="w-80 px-4 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              <br/>
              {errors.email && (
                <span className="text-sm text-red-600">
                  This field is required
                </span>
              )}
            </div>
            <div className="mt-4 space-y-4">
              <span>Password</span>
              <br />
              <input
                type="password"
                name="password"
                placeholder="Enter Your password"
                className="w-80 px-4 py-1 border rounded-md outline-none"
                {...register("password", { required: true })}
              />
              <br/>
              {errors.password && (
                <span className="text-sm text-red-600">
                  This field is required
                </span>
              )}
            </div>
            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 text-white px-3 py-1 border rounded-md hover:bg-pink-700 duration-200">
                Login
              </button>
              <p>
                Not Registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-700 cursor-pointer"
                >
                  SignUp
                </Link>
                {""}
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
