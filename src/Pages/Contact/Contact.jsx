import React from "react"

import style from "./style.module.css"

export default props => {
    return(
        <div className={style.container}>
            <h1>Contact</h1>
            <p>My social midias.</p>
            <div className={style.contact}>
                <ul>
                    <li>
                        <a href="https://www.instagram.com/ze_felipe1903/" 
                        target="_blank" 
                        rel="noopener noreferrer">Instagram</a>
                    </li>
                    <li>
                        <a href="https://github.com/zefelipe19" 
                        target="_blank" 
                        rel="noopener noreferrer">GitHub</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/jose-felipe-paula/" 
                        target="_blank" 
                        rel="noopener noreferrer">Linkedin</a>
                    </li>
                    <li>
                        <a href="mailto:felipe.paula1903@gmail.com">E-mail</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}