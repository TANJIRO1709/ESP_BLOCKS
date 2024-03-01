"use client";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
//import router from "next/router";

export default function UserProfilePage({ params }: any) {
    const router = useRouter()
    const logout = async () => {
        try {
            await axios.get('/api/users/logout')
            toast.success('Logout Successful')
            router.push('/login')

        } catch (error: any) {
            toast.error(error.message);
        }
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr />
            <p className="text-4xl">Profile Page</p>
            <hr />
            <button onClick={logout} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Logout</button>
        </div>
    )
}