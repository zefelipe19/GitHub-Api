import React from "react"
import {Route, Routes} from "react-router-dom"

import Home from "../Pages/Home/Home"
import Profile from "../Pages/Profile/Profile"
import Contact from "../Pages/Contact/Contact"

export default function Router() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="contact/" element={<Contact />} />
            <Route path="profile/:user" element={<Profile />} />
        </Routes>
    )
}