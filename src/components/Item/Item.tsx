import React from "react";

import {ItemRecord} from "../../types/item";

import {DirectoryImg} from "../DirectoryImg/DirectoryImg";
import {FileImg} from "../FileImg/FileImg";

import ItemCSS from "./Item.module.css";

export const Item = (props:ItemRecord) => {

    const {id, name, children} = props;

    return (
        <div className={ItemCSS.item}>
            {
                children ?
                    <DirectoryImg id={id} children={children} name={name} /> : <FileImg name={name}/>
            }
            <p className={ItemCSS.itemName}>{name}</p>
        </div>
    )
}