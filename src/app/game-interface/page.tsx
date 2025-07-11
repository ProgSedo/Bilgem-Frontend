"use client";

import Field from "@/components/field/Field";
import GameBar from "@/components/game-bar/GameBar";
import styles from "./page.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <GameBar></GameBar>
      <Field rowNumber={4} columnNumber={4}></Field>
      <div className={styles.bottombar}>
        <button className={styles.exitbutton}>
          Exit
        </button>
      </div>
    </div>
  );
}
