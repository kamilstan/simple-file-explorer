import {createContext} from "react";


export const PreviousChildrenContext = createContext({
    previousChildren: [],
    setPreviousChildren: (s: any) => {},
})