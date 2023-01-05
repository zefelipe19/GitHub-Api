import React from "react";
import style from "./style.module.css"

export default props => {
    return(
        <div className={style.card}>
            <div className={style.title}>
                <img src={props.img} alt="" />
                <h3>{props.name}</h3>
            </div>
            <p>{props.bio}</p>
        </div>
    )
}