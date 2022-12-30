import React, {useContext} from "react";
import {useNavigate} from "react-router-dom";

import {ItemRecord} from "../../types/item";

import {Item} from "../Item/Item";

import {ChildrenContext} from "../../contexts/children.context";
import {NameContext} from "../../contexts/name.context";
import {PreviousChildrenContext} from "../../contexts/previousChildren.context";
import {PreviousNameContext} from "../../contexts/previousName.context";

import DirectoryCSS from "./Directory.module.css";

export const Directory = () => {

    const navigate = useNavigate();

    const {children,setChildren} = useContext(ChildrenContext);
    const {previousChildren} = useContext(PreviousChildrenContext);
    const {name, setName} = useContext(NameContext);
    const {previousName} = useContext(PreviousNameContext);


    const goToPreviousDirectory = () => {
        setChildren(previousChildren);
        setName(previousName);
        navigate(-1);
    }

    return (
        <div className={DirectoryCSS.folder}>
            <div className={DirectoryCSS.goBack}>
                <button className={DirectoryCSS.goBackButton} onClick={goToPreviousDirectory}>
                    <img src="back.svg" alt="back" width="25px"/>
                </button>

                <div className={DirectoryCSS.folderInfo}>
                    <img className={DirectoryCSS.goBackImg} src="directory.svg" alt="directory" width="50px"/>
                    <p>{name}</p>
                </div>
            </div>
            <div className={DirectoryCSS.items}>
                {
                    children.map((item:ItemRecord) => (
                    <Item key={item.id} id={item.id} name={item.name} children={item.children} />
                ))
                }
            </div>
        </div>
    )
}