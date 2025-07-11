"use client";
import { useState } from "react";
import styles from "./SignupForm.module.css"
import { useRouter } from "next/navigation";

export default function SignupForm(){
    const router = useRouter();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = () =>{
        const stored = localStorage.getItem("users");
        const users = stored ? JSON.parse(stored) : {};
        if(username in users){
            console.log("Username exists");
        }
        else{
            users[username] = password;
            localStorage.setItem("users", JSON.stringify(users));
            console.log("Signed up");
            router.push("/signin");
        }
    };

    return(
        <div className={styles.signupform}>
            <label>
                Username
            </label>
            <input type="text" value={username} onChange={ (e) => setUsername(e.target.value)}/>
            <label>
                Password
            </label>
            <input type="password" value={password} onChange={ (e) => setPassword(e.target.value)}/>
            <button onClick={handleSignup}>
                Sign Up
            </button>
        </div>
    );
}