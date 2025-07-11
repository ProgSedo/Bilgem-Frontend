"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Block.module.css"

//["T", "F", "B", "Ç", "K"]

export default function Block(){
    const [plantStatusArray, setPlantStatusArray] = useState<string[]>([]);
    const [plantStatusIndex, setPlantStatusIndex] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const clickBlock = () => {
        if(plantStatusArray.length !== 0){
            if(plantStatusIndex == plantStatusArray.length-2){

                cleanBlock();
            }
            else if(plantStatusIndex == plantStatusArray.length-1){

                cleanBlock();
            }
            return;
        }
        setPlantStatusArray(["T", "F", "B", "Ç", "K"]);
        setPlantStatusIndex(0);
    };

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
                    }, 4000);
                    return prev;
                }
                return prev+1;
            })
        }, 2000);
    },[plantStatusArray]);

    return(
        <div className={styles.block} onClick={clickBlock}>
            {plantStatusArray.length !== 0 ? plantStatusArray[plantStatusIndex] : null}
        </div>
    );
}