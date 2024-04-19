import {Link} from "react-router-dom";
import Navbar from "./Navbar";
import {useForm} from "react-hook-form";
import {API} from "../api/api";


export default function PropertyPage(){

    const {
        register,
        handleSubmit,
        formState:{errors,isValid,isSubmitting}
    } = useForm()

    const onSubmit = (data) => {
        console.log("form submit edildi",data)
        API.post("https://localhost:8082/api/photos/",data)
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>

            <Navbar/>
        <form
            className=" dark:bg-gray-900 w-80 m-auto mt-12"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Add Property
                        </h1>
                        <div>
                            <label
                                htmlFor="username"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Title
                            </label>
                            <input
                                type="text"
                                name="title"
                                className={`bg-gray-50 border border-gray-300 text-gray-900 block w-full p-2.5 rounded-lg `}
                                placeholder="Info About House"
                                {...register("title", {
                                    required: "Name can't be empty",
                                    minLength: {
                                        value: 3,
                                        message: "You have to write at least 3 characters",
                                    },
                                })}
                            />
                            {errors.name && (
                                <p className="text-red-500">{errors.name?.message}</p>
                            )}
                        </div>
                        <div>
                            <label
                                htmlFor="username"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Description
                            </label>
                            <input
                                type="text"
                                name="description"
                                className={`bg-gray-50 border border-gray-300 text-gray-900 block w-full p-2.5 rounded-lg `}
                                placeholder="Description"
                                {...register("description", {
                                    required: "Name can't be empty",
                                    minLength: {
                                        value: 3,
                                        message: "You have to write at least 3 characters",
                                    },
                                })}
                            />
                            {errors.name && (
                                <p className="text-red-500">{errors.name?.message}</p>
                            )}
                        </div>
                        <div>
                            <label
                                htmlFor="houses"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Select Property Type
                            </label>
                            <select
                                // value={watch("role_id")}
                                // onClick={changeHandler}
                                {...register("property")}
                            >
                                <option>House</option>
                                <option>Farm</option>
                                <option>Summer House</option>
                            </select>

                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Photos
                            </label>
                            <input
                                type="file"
                                accept="image/*"
                                name="photo"
                                className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg  block w-full p-2.5"
                                placeholder="name@company.com"
                                {...register("photo", {
                                    required: "You need to write your mail",
                                    pattern: {
                                        value: /^\S+@\S+\.\S+$/,
                                        message: "Please Enter A Valid Email Adress!",
                                    },
                                })}
                            />
                            <label/>
                            {errors.email && (
                                <p className="text-red-500">{errors?.email.message}</p>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            disabled={!isValid || isSubmitting}
                        >
                            Upload Property
                        </button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Already have an account?{" "}
                            <Link
                                to="/login"
                                href="#"
                                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                            >
                                Login here
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </form>
        </div>
    )
}
