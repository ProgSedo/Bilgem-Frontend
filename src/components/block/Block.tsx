"use client";

import {useContext, useEffect, useRef, useState } from "react";
import styles from "./Block.module.css"
import { BalanceContext } from "@/contexts/BalanceContext";
import { RoseNumberContext } from "@/contexts/flower/rose/RoseNumberContext";
import { Sunflower } from "next/font/google";
import { SunflowerNumberContext } from "@/contexts/flower/sunflower/SunflowerNumberContext";


//["T", "F", "B", "Ç", "K"]

export default function Block(){
    const [plantStatusArray, setPlantStatusArray] = useState<string[]>([]);
    const [plantStatusIndex, setPlantStatusIndex] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const [profit, setProfit] = useState(0);
    const [balance, setBalance] = useContext(BalanceContext);
    const [roseNumber, setRoseNumber] = useContext(RoseNumberContext);
    const [sunflowerNumber, setSunflowerNumber] = useContext(SunflowerNumberContext);


    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const clickBlock = () => {
        if(isPopupOpen) return;
        if(plantStatusArray.length !== 0){
            if(plantStatusIndex == plantStatusArray.length-2){
                setBalance(prev => prev + profit);
                cleanBlock();
            }
            else if(plantStatusIndex == plantStatusArray.length-1){

                cleanBlock();
            }
            return;
        }
        setIsPopupOpen(true);
    };

    const initialize = (flower:number) => {
        setIsPopupOpen(false);
        if(flower === 0){
            if(roseNumber <= 0) return;
            setRoseNumber(prev => prev -1);
        } 
        else if(flower === 1) {
            if(sunflowerNumber <= 0) return;
            setSunflowerNumber(prev => prev -1);
        }

        setProfit(10);
        setPlantStatusArray(["T", "F", "B", "Ç", "K"]);
        setPlantStatusIndex(0);
    }

    const cleanBlock = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setPlantStatusArray([]);
        setPlantStatusIndex(0);
    };

    useEffect(() => {
        if(plantStatusArray.length === 0) return;
        intervalRef.current = setInterval(()=>{
            setPlantStatusIndex(prev => {
                if(prev >= plantStatusArray.length-2){
                    clearInterval(intervalRef.current!);

                    timeoutRef.current = setTimeout(()=>{
                        setPlantStatusIndex(plantStatusArray.length-1);
                    }, 2000);
                    return prev;
                }
                return prev+1;
            })
        }, 2000);
    },[plantStatusArray]);

    return(
        <>
        <div className={styles.block} onClick={clickBlock}>
            {plantStatusArray.length !== 0 ? plantStatusArray[plantStatusIndex] : null}
        </div>

        {isPopupOpen && (
        <div className={styles.popupOverlay}>
            <div className={styles.popupContent}>
                <button className={styles.button} onClick={() => initialize(0)}>Rose</button>
                <button className={styles.button} onClick={() => initialize(1)}>Sunflower</button>
            </div>
        </div>
        )}
        </>
    );
}