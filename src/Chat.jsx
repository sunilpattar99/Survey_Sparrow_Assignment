import React , {useState , useEffect} from "react";
import axios from "axios";
import ClearIcon from '@material-ui/icons/Clear';
import SendIcon from '@material-ui/icons/Send';


function Chat(){
    const [displaySetting , setdisplaySetting] = useState({
        isDefault:true,
        asktoStart:false,
        showChat:false
    });

    const obj = {"slip": { "id": 196, "advice": "Have a firm handshake."}}
    console.log(obj.slip.advice);


    // just to fetch the api from the link given
    // useEffect(()=>{
    //     axios
    //     .get("https://api.adviceslip.com/advice")
    //     .then(res =>{
    //         console.log(res)
    //         setPosts(res.data) 
    //     })
    //     .catch(err=>{
    //         console.log(err)
    //     })
    // } , [])
    
    function showChat(){
        setdisplaySetting({
            isDefault:false,
            asktoStart:true,
            showChat:false
        });
    }

    function startNewConvo(){
        setdisplaySetting({
            isDefault:false,
            asktoStart:false,
            showChat:true
        });
    }

    function endChatWindow(){
        setdisplaySetting({
            isDefault:true,
            asktoStart:false,
            showChat:false
        });
    }

  
    
    // function displayValue(event){
    //     event.preventDefault();
    //     console.log(writeValue);
    //     setQuery(prevValue=>{
    //         return [...prevValue , writeValue]
    //     })
    //     console.log(query) ;
    // }

    return <div className="chatbox">
                <div className="square" style={{display:displaySetting.asktoStart ? "block" : "none" }}>
                    <div className="innerSquare">
                        <h2>Hi There</h2>
                        <p>Hello Ask Us Anything, Share Your Feedback</p>
                    </div>
                    <h4 style={{fontSize:"12px" , margin:"20px 0 8px 40px"}}><strong>Start a conversation</strong></h4>
                    <p style={{fontSize:"10px" , margin:"0 0 12px 40px"}}>The team typically replies in few minutes</p>
                    <button className="startConvoBtn" onClick={startNewConvo}>
                        <span style={{float:"left"}}>New Conversation</span> 
                        <SendIcon style={{float:"right" , fontSize:"18px" , marginLeft:"5px"}}/>
                    </button> 
                </div>

                <div className="squareChat" style={{display:displaySetting.showChat ? "block" : "none" }}>
                    <div className="innerSquareChat">
                        <h2>Hi There</h2>
                        <p>Hello Ask Us Anything, Share Your Feedback</p>
                    </div>
                  
                    <div className="chatTextWindow">
                        <div>
                            <div className="rightChat">
                                <p>What should I do when I meet someone?</p>
                                <div className="smallTraingle"></div>
                            </div>
                            <div className="profileCircle"></div>
                            <div className="leftChat">
                                <p>{obj.slip.advice}</p>
                            </div>
                        </div>
                       
                    </div>
                    
                    <div className="copyRight" style={{width:"10rem" , margin:"10px 0 35px 90px"}}> 
                        <img style={{float:"left" }} src="./sparrow favicon.png" alt="" height="12px" width="12px"/>
                        <p style={{fontSize:"9px" , color:"gray" }}>
                        <span style={{float:"left" , marginLeft:"8px"}}>we run on surveysparrow</span></p>
                    </div>
                    <div className="getInput">
                        <input type="text" placeholder="Write a reply..." ></input>
                        <button style={{cursor:"pointer"}}><SendIcon style={{color:"#7f8ac5"}}/></button>
                    </div>
                </div>
                <button onClick={endChatWindow}
                        className="afterclickBtn" 
                        style={{display: displaySetting.isDefault ? "none" : "block"}}><ClearIcon /></button>
                
                <button onClick={showChat} className="chatbtn" 
                        style={{display: displaySetting.isDefault ? "block" : "none"}}></button>

            </div>
}

export default Chat;