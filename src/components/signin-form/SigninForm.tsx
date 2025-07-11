"use client";
import { useState } from "react";
import styles from "./SigninForm.module.css"
import { useRouter } from "next/navigation";

export default function SigninForm(){
    const router = useRouter();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSignin = () =>{
        const stored = localStorage.getItem("users");
        const users = stored ? JSON.parse(stored) : {};
        if( (username in users) && users[username] === password){
            router.push("/game-interface");
        }
        else{
            console.log("Wrong username or password");
        }
    };

    return(
        <div className={styles.signinform}>
            <label>
                Username
            </label>
            <input type="text" value={username} onChange={ (e) => setUsername(e.target.value)}/>
            <label>
                Password
            </label>
            <input type="password" value={password} onChange={ (e) => setPassword(e.target.value)}/>
            <button onClick={handleSignin}>
                Sign In
            </button>
        </div>
    );
}