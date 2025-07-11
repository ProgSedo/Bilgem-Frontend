"use client";

import Field from "@/components/field/Field";
import GameBar from "@/components/game-bar/GameBar";
import styles from "./page.module.css"
import { BalanceContext } from "@/contexts/BalanceContext";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <BalanceContext value={100}>
      <div className={styles.container}>
        <GameBar></GameBar>
        <Field></Field>
        <div className={styles.bottombar}>
          <button className={styles.exitbutton} onClick={() => router.push("/signin")}>
            Exit
          </button>
        </div>
      </div>
    </BalanceContext>
  );
}
