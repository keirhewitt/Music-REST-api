import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";
import axios from "axios";

/* Register form validation schema */
import { registerSchema } from "../../config/form.validation";

type Credentials = {
  email: string;
  password: string;
};

/** Register a User */
const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  /* JSONify credentials, create POST request and send to url */
  async function registerUser(creds: Credentials) {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:8000/swordfishtrombone/api/v1/user/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(creds),
    };

    const response = await axios.request(config);
    return response.data;
  }

  async function onSubmit(data: any) {
    const response = await registerUser({
      email: data.email,
      password: data.password,
    });
    if ("token" in response) {
      Swal.fire({
        title: "Registration success!",
        timer: 1500,
        timerProgressBar: true,
      }).then((value) => {
        localStorage.setItem("token", response["token"]);
        localStorage.setItem("user", JSON.stringify(response));
        window.location.reload();
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Account registration unsuccessful!",
        cancelButtonText: "Close",
      });
    }
  }

  return (
    <div className="w-5/6 flex m-auto h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[500px] m-auto flex flex-col justify-around px-4 py-8 bg-slate-50 rounded-lg"
      >
        {/* Email Input */}
        <div className="relative mb-1">
          <label htmlFor="emailInput">Email</label>
          <input
            type="text"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            {...register("email")}
            aria-invalid={errors.email ? "true" : "false"}
          />
          <div className="invalid-feedback">{errors.email?.message}</div>
        </div>

        {/* Password Input */}
        <div className="relative mb-1">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            {...register("password")}
            id="password"
          />
          <div className="invalid-feedback">{errors.password?.message}</div>
        </div>

        {/* Confirm Password Input */}
        <div className="relative mb-1">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            className={`form-control ${
              errors.confirmpassword ? "is-invalid" : ""
            }`}
            {...register("confirmpassword")}
            id="confirm-password"
          />
          <div className="invalid-feedback">
            {errors.confirmpassword?.message}
          </div>
        </div>

        {/* Submit Button */}
        <input
          className="btn btn-primary mt-3"
          type="submit"
          value="Register"
        />
      </form>
    </div>
  );
};

export default Register;
