import { createBrowserRouter, Outlet } from "react-router";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import ProductDetail from "@/pages/ProductDetail";
import MainLayout from "@/layouts/MainLayout";


const routes = createBrowserRouter([{
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
    ]
}])

export default routes;