'use client'
import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import logout from "@/firebase/auth/logout"

function Page() {
    const { user } = useAuthContext()
    const router = useRouter()

    React.useEffect(() => {
        if (user == null) router.push("/")
    }, [user])

    return (<div>
        <button className="bg-red-300 p-2" onClick={logout}>Logout</button>
        <h1>Only logged in users can view this page</h1>
        </div>)
}

export default Page;