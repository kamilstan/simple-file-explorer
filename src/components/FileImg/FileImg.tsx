import React from "react";

import FileImgCSS from "./FileImg.module.css";
import {ItemName} from "../../types/item";

export const FileImg = (props:ItemName) => {

    const openFile = () => {
        alert(`File ${props.name} is opened`);
    }

    return (
        <button className={FileImgCSS.fileButton} onClick={openFile}>
            <img className={FileImgCSS.fileImg} src="/file.svg" alt="file"/>
        </button>
    )
}