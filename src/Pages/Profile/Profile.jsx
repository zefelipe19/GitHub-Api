import React from "react";
import {  useEffect, useState } from "react"
import {  useParams  } from "react-router-dom"
import axios from "axios";

import RepoCard from "../../Components/RepoCard/RepoCard";
import style from "./style.module.css"


export default function Profile() {
    const {user} = useParams()
    const [detailUser, setDatailUser] = useState(null)
    const [userRepos, setUseRepos] = useState(null)

    useEffect(()=> {
        const details = async () => {
            await axios.get(`https://api.github.com/users/${user}`)
            .then (async response => {
                setDatailUser(response.data)
                
                await axios.get(`https://api.github.com/users/${user}/repos`)
                .then(response => {
                    const data = response.data
                    console.log("Deveriam aparecer isso.", data)
                    setUseRepos(data)
                })
                .catch(error => console.error(error))
            })
            .catch(error => console.error(error))
        }
        details()
    }, [])

    return(
        <>
            {
                detailUser&& (
                    <div>
                        <div className={style.profile}>
                            <div className={style.user}>
                                <img src={detailUser.avatar_url} alt="GitHub Avatar" />
                                <div>
                                    <h3>{detailUser.name}</h3>
                                    <p>{detailUser.bio}</p>
                                </div>
                        
                            </div>
                            <div className={style.details}>
                                <div>
                                    <p>{detailUser.followers}</p>
                                    <p>Followers</p>
                                </div>
                                <div>
                                    <p>{detailUser.following}</p>
                                    <p>Following</p>
                                </div>
                                <div>
                                    <p>{detailUser.public_repos}</p>
                                    <p>Repos</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            {
                                userRepos&& (
                                    userRepos.map(repos => {
                                        <RepoCard name={repos.name} html_url={repos.html_url}/>
                                    })
                                )
                            }
                        </div>
                    </div>
                )
            }
        </>
        
    )
}