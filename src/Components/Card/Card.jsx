import React from "react";
import style from "./style.module.css"

import {  Link  } from "react-router-dom"

export default function Card ({username, img, bio}) {
    return(
        <div className={style.card}>
            <Link to={`profile/${username}`}>
                <div className={style.title}>
                    <img src={img} alt="GitHub Avatar" />
                    <h3>{username}</h3>
                </div>
                <p>{bio}</p>
            </Link>
        </div>
    )
}