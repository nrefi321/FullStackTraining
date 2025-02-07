import MainLayout from "@/layouts/MainLayout"
import About from "@/pages/About"
import Contact from "@/pages/Contact"
import Home from "@/pages/Home"
import ProductDetail from "@/pages/ProductDetail"
import Cart from "@/pages/Cart"
import { createBrowserRouter, RouterProvider } from "react-router"
import Login from "@/pages/Login"
// import Forgotpassword from "@/pages/ForgotPassword"
import Register from "@/pages/Register"
// import DashboardLayout from "@/layouts/DashboardLayout"
import Dashboard from "@/pages/dashboard/Dashboard"
import Team from "@/pages/dashboard/Team"
import Projects from "@/pages/dashboard/Projects"
import Calendar from "@/pages/dashboard/Calendar"
import Documents from "@/pages/dashboard/Documents"
import Profile from "@/pages/dashboard/Profile"
import Reports from "@/pages/dashboard/Reports"
import Settings from "@/pages/dashboard/Settings"
import Forgotpassword from "@/pages/Forgotpassword"
// import { ThemeProvider } from "@/contexts/ThemeProvider"
import DashboardLayout from "@/layouts/DashboardLayout"

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/products/:id",
                element: <ProductDetail />
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ]
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/forgotpassword",
        element: <Forgotpassword />
    },
    {
        // Dashboard Layout
        path: "/dashboard",
        // Main Layout
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path: "/dashboard/team",
                element: <Team />
            },
            {
                path: "/dashboard/projects",
                element: <Projects />
            },
            {
                path: "/dashboard/calendar",
                element: <Calendar />
            },
            {
                path: "/dashboard/documents",
                element: <Documents />
            },
            {
                path: "/dashboard/reports",
                element: <Reports />
            },
            {
                path: "/dashboard/settings",
                element: <Settings />
            },
            {
                path: "/dashboard/profile",
                element: <Profile />
            },
        ]
    }
])

export const AppRouter = () => {
    return <RouterProvider router={router} />
}

// export function AppRouter() {
//     return (
//         <ThemeProvider>
//             <RouterProvider router={router} />
//         </ThemeProvider>
//     )
// }