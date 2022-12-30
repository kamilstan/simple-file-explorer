import {createContext} from "react";

export const PreviousNameContext = createContext({
    previousName: "",
    setPreviousName: (s: string) => {},
})