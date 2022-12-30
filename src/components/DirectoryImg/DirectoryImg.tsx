import React, {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";

import {ItemRecord} from "../../types/item";

import {IdContext} from "../../contexts/id.context";
import {ChildrenContext} from "../../contexts/children.context";
import {NameContext} from "../../contexts/name.context";
import { PreviousChildrenContext } from "../../contexts/previousChildren.context";
import {PreviousNameContext} from "../../contexts/previousName.context";

import DirectoryImgCSS from "./DirectoryImg.module.css";

export const DirectoryImg = (props:ItemRecord) => {

    const {setId} = useContext(IdContext);
    const {name,setName} = useContext(NameContext);
    const {previousName,setPreviousName} = useContext(PreviousNameContext);
    const {children,setChildren} = useContext(ChildrenContext);
    const {setPreviousChildren} = useContext(PreviousChildrenContext);

    useEffect(() => {
        setPreviousChildren(children);
        setPreviousName(name);
    }, [previousName])


    const openDirectory = () => {
        setId(props.id);
        setChildren(props.children);
        setName(props.name);
    }

    return (
       <>
           <Link to={`${props.id}`}  >
               <button className={DirectoryImgCSS.directoryButton} onClick={openDirectory}>
                   <img className={DirectoryImgCSS.directoryImg} src="/directory.svg" alt="directory"/>
               </button>
           </Link>
       </>
    )
}