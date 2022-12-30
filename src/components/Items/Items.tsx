import React, {useContext, useEffect, useState} from "react";
import {Item} from '../Item/Item';
import {ItemRecord} from "../../types/item";
import {ChildrenContext} from "../../contexts/children.context";

import ItemsCSS from "./Items.module.css";

export const Items = () => {

    const [loading, setLoading] = useState(false);

    const {children,setChildren} = useContext(ChildrenContext);

    useEffect(() => {
        setLoading(true);
        (async () => {
            const res = await fetch("mockup.json")
            const data = await res.json();
            setChildren(data);
        })();
        setLoading(false);
    }, [])

    if (loading) {
        return <p>loading</p>;
    };

    return (
        <div className={ItemsCSS.items}>
            {children.map((item:ItemRecord) => (
                <Item key={item.id} id={item.id} name={item.name} children={item.children}/>
            ))
            }
        </div>
    )
}