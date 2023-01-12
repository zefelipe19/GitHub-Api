import React from "react";
import style from "./style.module.css"

export default function RepoCard({name, html_url}) {
    return(
        <div className={style.card}>
            <Link to={html_url}>
                <div className={style.title}>
                    <h3>{name}</h3>
                </div>
            </Link>
        </div>
    )
}