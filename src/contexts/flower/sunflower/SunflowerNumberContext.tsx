import { createContext } from "react";

export const SunflowerNumberContext = createContext<[number, React.Dispatch<React.SetStateAction<number>>]>([0, () => {}]);;