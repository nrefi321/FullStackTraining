import { Container } from "../components/Container"
import { SectionTitle } from "../components/SectionTitle" 
import { useEffect } from "react"
import { Link, useNavigate } from "react-router"
import { authLogin } from "@/services/apiAuthUser"
import { LoginData } from "@/types/user"
import { useForm , SubmitHandler} from "react-hook-form"
import Swal from 'sweetalert2'




export default function Login() {

  const navigate = useNavigate()

  useEffect(() => {
    document.title = "Login | React Tailwind Admin"
  }, [])

  // Create useForm hook
  const { register, handleSubmit, formState: { errors } } = useForm<LoginData>()

  const onSubmit: SubmitHandler<LoginData> = (data) => {
    console.log(data)
    // Send username-password to API
    authLogin(data).then((response) =>{
      console.log(response)

      // Alert and can drag
      Swal.fire({
        title: "Drag me!",
        icon: "success",
        draggable: true,
        timer: 1500
      });

      // keep in local storeage
      localStorage.setItem('access_token',response.data.accessToken)
      localStorage.setItem('user',JSON.stringify(response.data.user))


      setTimeout(()=>{
        navigate("/dashboard")
      },2000)

    }).catch((error)=>{
    Swal.fire({
    icon: "error",
    title: "ERROR",
    text: "Something went wrong!",
    timer: 1500
    // footer: '<a href="#">Why do I have this issue?</a>'
});
      console.log(error)
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Container>
        {/* Back to Home Button */}
        <div className="py-4 flex justify-center">
          <Link 
            to="/" 
            className="flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500"
          >
            <svg className="mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>

        <div className="flex min-h-[80vh] items-center justify-center flex-col space-y-4">
          <div className="w-full max-w-md space-y-8 rounded-2xl bg-white p-8 shadow-lg dark:bg-white">
            <div>
              <SectionTitle
                preTitle="Welcome back"
                title="Sign In"
                align="center"
              >
              </SectionTitle>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-4 rounded-md">
                <div>
                  <label htmlFor="text" className="block text-sm font-medium text-gray-700 mb-2">
                    Username
                  </label>
                  <input
                    {...register("username", {
                      required: true,
                      minLength: 3,
                      maxLength: 20,
                    })}
                    id="username"
                    name="username"
                    type="text"
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                    placeholder="Enter your username"
                  />
                  {errors.username && <p className="text-red-500 text-xs mt-1">Username is required</p>}
                  {errors.username?.type === "minLength" && <p className="text-red-500 text-xs mt-1">Username must be at least 3 characters</p>}
                  {errors.username?.type === "maxLength" && <p className="text-red-500 text-xs mt-1">Username must be at most 20 characters</p>}
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                    })}
                    id="password"
                    name="password"
                    type="password"
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                    placeholder="Enter your password"
                  />
                  {errors.password && <p className="text-red-500 text-xs mt-1">Password is required</p>}
                  {errors.password?.type === "minLength" && <p className="text-red-500 text-xs mt-1">Password must be at least 6 characters</p>}
                  {errors.password?.type === "maxLength" && <p className="text-red-500 text-xs mt-1">Password must be at most 20 characters</p>}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <Link to="/forgotpassword" className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
                    Forgot your password?
                  </Link>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Sign in
                </button>
              </div>

              <div className="text-center text-sm">
                <span className="text-gray-600 dark:text-gray-400">Don't have an account? </span>
                <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
                  Sign up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  )
}