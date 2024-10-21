import { useContext } from 'react'
import { useState } from 'react'
import { assets } from '../../../assets/assets'
import './Main.css'
import { Context } from '../../../context/context'

const Main = () => {
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)
    return (
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <img className="user" src={assets.user} alt="" />
            </div>
            <div className="main-container">
                {!showResult?<>
                    <div className="greet">
                    <div>
                        <span>Hello, User</span>
                        <p>How can I help you ?</p>
                    </div>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Discover the World, One Trip at a Time</p>
                        <img src={assets.compass} alt="" />
                    </div>
                    <div className="card">
                        <p>Briefly summarize the concept</p>
                        <img src={assets.lightbulb} alt="" />
                    </div>
                    <div className="card">
                        <p>Innovating Tomorrow, Today</p>
                        <img src={assets.message} alt="" />
                    </div>
                    <div className="card">
                        <p>Simplify Your Journey. Amplify Your Success</p>
                        <img src={assets.code} alt="" />
                    </div>
                </div>
                </>:<div className='result'>
                    <div className="result-title">
                        <img src={assets.user} alt="" />
                        <p>{recentPrompt}</p>
                    </div>
                    <div className="result-data">
                        <img src={assets.gemini} alt="" />
                        {loading?
                        <div className='loader'>
                            <hr />
                            <hr />
                            <hr />
                        </div>:
                        <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                        }
                    </div>
                    </div>}
               
                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter your question' />
                        <div>
                            
                            <img onClick={()=>onSent(input)} src={assets.send} alt="" />
                        </div>
                    </div>
                    <div className="bottom-info">
                        <p>Gemini will display answer of your question </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main