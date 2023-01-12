import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import style from "./style.module.css"

import Card from "../../Components/Card/Card"

export default function Home() {

    const [user, setUser] = useState(null)
    const [search, setSearch] = useState(null)

    const handleUser = async () => {
        const searchUser = `https://api.github.com/users/${search}`

        await axios.get(searchUser)
        .then(response => {
            setUser(response.data)
        })
        .catch(error => console.log(error))
    }

    return(
        <div className={style.container}>
            <div className={style.search}>
                <h3>Search a user...</h3>
                <br />
                <div>
                    <input type="text" name="search" id="search" placeholder="Search User..."
                    onChange={(e) => setSearch(e.target.value)}/>
                    <button onClick={() => handleUser()}>Search</button>
                </div>
            </div>
            {
                user&& (
                    <Card 
                    img={user.avatar_url}
                    username={user.login}
                    bio={user.bio}/>
                )
            }
        </div>
    )
}
