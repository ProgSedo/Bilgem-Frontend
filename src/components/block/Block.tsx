"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Block.module.css"

//["T", "F", "B", "Ç", "K"]

export default function Block(){
    const [plantStatusArray, setPlantStatusArray] = useState<string[]>([]);
    const [plantStatusIndex, setPlantStatusIndex] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const plantSeed = () => {
        if(plantStatusArray.length !== 0) return;
        setPlantStatusArray(["T", "F", "B", "Ç", "K"]);
        setPlantStatusIndex(0);
    };

    useEffect(() => {
        if(plantStatusArray.length === 0) return;
        intervalRef.current = setInterval(()=>{
            setPlantStatusIndex(prev => {
                if(prev >= plantStatusArray.length-1){
                    clearInterval(intervalRef.current!);

                    setTimeout(()=>{
                        setPlantStatusArray([]);
                        setPlantStatusIndex(0);
                    }, 4000);
                    return prev;
                }
                return prev+1;
            })
        }, 2000);
    },[plantStatusArray]);

    return(
        <div className={styles.block} onClick={plantSeed}>
            {plantStatusArray.length !== 0 ? plantStatusArray[plantStatusIndex] : null}
        </div>
    );
}