"use client";
import styles from "./GameBar.module.css"

export default function GameBar(){
    return(
        <div className={styles.gamebar}>
            <button className={styles.gamebarbutton}>Balance: </button>
            <button className={styles.gamebarbutton}>Store</button>
        </div>
    );
}