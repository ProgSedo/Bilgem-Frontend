"use client";
import { useContext } from "react";
import styles from "./GameBar.module.css"
import { BalanceContext } from "@/contexts/BalanceContext";
import { useRouter } from "next/navigation";
import { RoseNumberContext } from "@/contexts/flower/rose/RoseNumberContext";
import { SunflowerNumberContext } from "@/contexts/flower/sunflower/SunflowerNumberContext";

export default function GameBar(){
    const router = useRouter();

    const [balance, setBalance] = useContext(BalanceContext);
    const [roseNumber, setRoseNumber] = useContext(RoseNumberContext);
    const [sunflowerNumber, setSunflowerNumber] = useContext(SunflowerNumberContext);

    return(
        <div className={styles.gamebar}>
            <label className={styles.gamebarlabel}>Balance: {balance}, Rose: {roseNumber}, Sunflower: {sunflowerNumber}</label>
            <button className={styles.gamebarbutton} onClick={() => router.push("/game-interface/store")}>Store</button>
        </div>
    );
}