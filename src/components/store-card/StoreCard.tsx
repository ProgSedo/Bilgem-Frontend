"use client";
import { useState } from "react";
import styles from "./StoreCard.module.css"
import { useRouter } from "next/navigation";
import { BalanceContext } from "@/contexts/BalanceContext";
import { RoseNumberContext } from "@/contexts/flower/rose/RoseNumberContext";
import { SunflowerNumberContext } from "@/contexts/flower/sunflower/SunflowerNumberContext";
import { useContext } from "react";

type StoreCardType = {
    name: string;
};

export default function StoreCard({name}: StoreCardType){
    const router = useRouter();

    const [selectedNumber, setSelectedNumber] = useState(0);
    const [balance, setBalance] = useContext(BalanceContext);
    const [roseNumber, setRoseNumber] = useContext(RoseNumberContext);
    const [sunflowerNumber, setSunflowerNumber] = useContext(SunflowerNumberContext);

    const increment = () => {
        if(name === "rose" && selectedNumber < roseNumber){
            setSelectedNumber(prev => prev + 1);
        }
        else if(name === "sunflower" && selectedNumber < sunflowerNumber){
            setSelectedNumber(prev => prev + 1);
        }
    };

    const decrement = () => {
        if(name === "rose" && selectedNumber > 0){
            setSelectedNumber(prev => prev - 1);
        }
        else if(name === "sunflower" && selectedNumber > 0){
            setSelectedNumber(prev => prev - 1);
        }
    };

    const updateBalance = (change: number) => {
        if(balance < change) return;
        setBalance(prev => prev - change);
    };

    const incrementFlower = ()=> {
        if(name === "rose"){
            updateBalance(5 * selectedNumber);
            setRoseNumber(prev => prev + selectedNumber);
        }
        else if(name === "sunflower"){
            updateBalance(10 * selectedNumber);
            setSunflowerNumber(prev => prev + selectedNumber);
        }
    }

    return(
        <div className={styles.card}>
            <label>
                Buy {name}!
            </label>
            <div className={styles.numberSelector}>
                <button onClick={decrement}>
                    -
                </button>
                <label>
                    {selectedNumber}
                </label>
                <button onClick={increment}>
                    +
                </button>
            </div>
            <button onClick={incrementFlower}>
                Buy
            </button>
        </div>
    );
}