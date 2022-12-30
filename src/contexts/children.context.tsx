import {createContext} from "react";
import {ItemRecord} from "../types/item";

export const ChildrenContext = createContext({
    children: [],
    setChildren: (s: any) => {},
})