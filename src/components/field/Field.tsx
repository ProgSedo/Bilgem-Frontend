"use client";

import Block from "../block/Block"
import styles from "./Field.module.css"

export default function Field(){
    return(
        <div className={styles.field}>
            {Array.from({ length: 4 }).map((_, row) => (
                <div key={row} style={{display:"flex", gap: "10px"}}>
                {Array.from({ length: 4 }).map((_, col) => (
                    <Block key={`4 * ${row} + ${col}`} />
                ))}
                </div>
            ))}
        </div>
    );
}