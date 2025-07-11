import { createContext } from "react";

export const RoseNumberContext = createContext<[number, React.Dispatch<React.SetStateAction<number>>]>([0, () => {}]);;