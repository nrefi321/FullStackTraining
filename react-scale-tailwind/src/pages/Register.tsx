import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { authRegister } from "@/services/apiAuthUser";
import { RegisterData } from "@/types/user";
import { useForm, SubmitHandler } from "react-hook-form";
import Swal from "sweetalert2";

// interface RegisterFormData extends RegisterData {
//   confirmPassword: string;
// }

export default function Register() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Register | WindReact";
  }, []);

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<RegisterData>();

  const onSubmit: SubmitHandler<RegisterData> = async (data) => {
    // if (data.password !== data.confirmPassword) {
    //   Swal.fire({
    //     icon: "error",
    //     title: "Password Mismatch",
    //     text: "Passwords do not match!",
    //   });
    //   return;
    // }

    try {
      const response = await authRegister(data);
      console.log(response);

      if (response.data.success) {
        Swal.fire({
          title: "Success!",
          text: response.data.msg || "Registration successful!",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });

        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      } else {
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: response.data.msg || "Please try again.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "ERROR",
        text: "Something went wrong!",
        timer: 1500,
      });
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Container>
        <div className="py-4 flex justify-center">
          <Link
            to="/"
            className="flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
          >
            <svg className="mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>

        <div className="flex min-h-[80vh] items-center justify-center flex-col space-y-1">
          <div className="w-full max-w-md space-y-1 rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-800">
            <SectionTitle preTitle="Create account" title="Sign Up" align="center" />

            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-4 rounded-md">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullname" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    {...register("fullname", { required: "Full name is required" })}
                    id="fullname"
                    type="text"
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    placeholder="John Doe"
                  />
                  {errors.fullname && <p className="text-red-500 text-xs mt-1">{errors.fullname.message}</p>}
                </div>
                 {/* Username */}
                 <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Username
                  </label>
                  <input
                    {...register("username", {
                      required: "Username is required",
                      minLength: { value: 3, message: "Must be at least 3 characters" },
                      maxLength: { value: 20, message: "Must be at most 20 characters" },
                    })}
                    id="username"
                    type="text"
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    placeholder="username"
                  />
                  {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username.message}</p>}
                </div>

                {/* Password */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Password
                  </label>
                  <input
                    {...register("password", {
                      required: "Password is required",
                      minLength: { value: 6, message: "Must be at least 6 characters" },
                    })}
                    id="password"
                    type="password"
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    placeholder="••••••••"
                  />
                  {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                </div>
                  {/* Confirm Password
                  <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Confirm Password
                  </label>
                  <input
                    {...register("confirmPassword", {
                      required: "Please confirm your password",
                      validate: (value) => value === watch("password") || "Passwords do not match",
                    })}
                    id="confirmPassword"
                    type="password"
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    placeholder="••••••••"
                  />
                  {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>}
                </div> */}

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    {...register("email", { required: "Email is required" })}
                    id="email"
                    type="email"
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    placeholder="aaa@bbb"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>

                {/* Tel No */}
                <div>
                  <label htmlFor="tel" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Tel No.
                  </label>
                  <input
                    {...register("tel", { required: "Tel is required" })}
                    id="tel"
                    type="tel"
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    placeholder="000"
                  />
                  {errors.tel && <p className="text-red-500 text-xs mt-1">{errors.tel.message}</p>}
                </div>
              

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}
