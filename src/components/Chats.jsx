import React, {useRef, useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "./firebase";

import { useAuth } from "../context/AuthContext";

const Chats = () => {
    const history = useHistory();
    const {user} = useAuth();
    console.log(user)
    const handleLogout = async ()=>{
        await auth.signOut();
        history.push("/");
    }

    return ( 
        <div className="chats-page">
            <div className="nav-bar">
                <div className="logo-tab">
                    UniChat
                </div>
                <div className="logout-tab" onClick={handleLogout}>
                    Logout
                </div>
            </div>

            <ChatEngine 
                height="calc(100vh - 66px)"
                projectId="68d203d0-3f33-49c7-9c3d-484abc11a012"
                userName="."
                userSecret="."
            />
        </div>
     );
}
 
export default Chats;