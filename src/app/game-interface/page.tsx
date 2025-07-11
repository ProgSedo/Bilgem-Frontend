"use client";

import Field from "@/components/field/Field";
import GameBar from "@/components/game-bar/GameBar";
import styles from "./page.module.css"
import { BalanceContext } from "@/contexts/BalanceContext";
import { useRouter } from "next/navigation";
import { RoseNumberContext } from "@/contexts/flower/rose/RoseNumberContext";
import { SunflowerNumberContext } from "@/contexts/flower/sunflower/SunflowerNumberContext";
import { useState } from "react";

export default function Home() {
  const router = useRouter();

  const [balance, setBalance] = useState(100);
  const [roseNumber, setRoseNumber] = useState(10);
  const [sunflowerNumber, setSunflowerNumber] = useState(10);

  return (
    <SunflowerNumberContext.Provider value={[sunflowerNumber, setSunflowerNumber]}>
    <RoseNumberContext.Provider value={[roseNumber, setRoseNumber]}>
      <BalanceContext.Provider value={[balance, setBalance]}>
        <div className={styles.container}>
          <GameBar></GameBar>
          <Field></Field>
          <div className={styles.bottombar}>
            <button className={styles.exitbutton} onClick={() => router.push("/signin")}>
              Exit
            </button>
          </div>
        </div>
      </BalanceContext.Provider>
    </RoseNumberContext.Provider>
    </SunflowerNumberContext.Provider>
  );
}
