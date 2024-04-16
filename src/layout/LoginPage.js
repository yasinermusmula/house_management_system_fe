import Navbar from "./Navbar";
import {useForm} from "react-hook-form";
import axios, {options} from "axios";
import {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {userName} from "../store/actions/UserActions";
export default function LoginPage(){

    const history = useHistory();
    const {register,handleSubmit,formState:{errors,isValid}} = useForm()
    const dispatch = useDispatch();

    const onSubmit = (data) => {
       dispatch(userName(data,history))
    }

    return(
        <>
            <Navbar/>
        <div className="flex justify-center">
            <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Your email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@company.com"
                        {...register("email", {
                            required: "You need to write your mail",
                            pattern: {
                                value: /^\S+@\S+\.\S+$/,
                                message: "Please Enter A Valid Email Adress!",
                            },
                        })}
                    />
                    {errors.email && (
                        <p className="text-red-500">{errors?.email?.message}</p>
                    )}
                    <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        {...register("password", {
                            required: "You need to write your password",
                        })}
                    />
                    <button
                        type="submit"
                        className="w-full mt-5 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        disabled={!isValid}
                    >
                        Log in
                    </button>
                </div>
            </form>
        </div>
        </>
    )
}