"use client";
import { useContext } from "react";
import styles from "./GameBar.module.css"
import { BalanceContext } from "@/contexts/BalanceContext";
import { useRouter } from "next/navigation";

export default function GameBar(){
    const router = useRouter();

    return(
        <div className={styles.gamebar}>
            <label className={styles.gamebarlabel}>Balance: {useContext(BalanceContext)}</label>
            <button className={styles.gamebarbutton} onClick={() => router.push("/game-interface/store")}>Store</button>
        </div>
    );
}