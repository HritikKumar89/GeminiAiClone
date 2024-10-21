import React, { useContext, useState } from "react";
import './sidebar.css'
import {assets} from '../../assets/assets'
import { Context } from "../../context/context";

const Sidebar = () =>{
    const[extended,setExtended] = useState(false)
    const{onSent,prevPrompt,setRecentPrompt,newChat} = useContext(Context)
    
    const loadPrompt =async(prompt)=>{
        setRecentPrompt(prompt)
        await onSent(prompt)
    }


    return(
        <div className="sidebar">
            <div className="top">
                <img onClick={()=>setExtended(prev=>!prev)}className="menu"src={assets.menu} alt="" />
                <div onClick={()=>newChat()}className="new-chat">
                    <img className="plus"src={assets.plus} alt="" />{extended?
                    <p>New Chat</p>:null}
                </div>
                {extended?
                <div className="recent">
                    <p className="recent-title">Recent</p>
                    {prevPrompt.map((item,index)=>{
                        return(
                        <div onClick={()=>loadPrompt(item)} className="recent-entry">
                            <img src={assets.message} alt="" className="message" />
                            <p>{item.slice(0,18)} ...</p>
                        </div>)
                    })}
                    
                </div>:null
                }
            </div>
            <div className="bottom">
                <div className="bottom-item">
                    <img src={assets.question} alt="" className="question" />
                    {extended?<p>Help</p>:null}
                </div><br />
                <div className="bottom-item">
                    <img src={assets.history} alt="" className="history" />
                    {extended?<p>Activity</p>:null}
                </div><br />
                <div className="bottom-item">
                    <img src={assets.settings} alt="" className="settings" />
                    {extended?<p>Setting</p>:null}
                </div>
            </div>
        </div>
    )
}
export default Sidebar