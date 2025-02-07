import { ReactNode } from "react";
import { Navigate } from "react-router";

type ProtectedRouteProps = {
    redirectPath: string
    children: ReactNode
}

// read token from localStorage if have render children if not redirect to redirectpath

const token = localStorage.getItem("access_token")

const ProtectedRouteProps = ({
    redirectPath = '/login',
    children}: ProtectedRouteProps) => {
        return token? <>{children}</> : <Navigate to ={redirectPath}/>
}
