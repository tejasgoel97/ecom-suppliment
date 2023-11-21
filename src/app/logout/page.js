'use client'

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuthContext } from "@/context/AuthContext";
import logout from "../../firebase/auth/logout";

const Page = () => {

    const router = useRouter();

    const { user } = useAuthContext()

    useEffect(() => {
        if (user == null) router.push("/")
        else {
            logout()
        }
    }, [user])
    return <div className="max-w-5xl mx-auto">
        Loggin User out
    </div>

}


export default Page;