import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../Utils/chatSlice";
import { v4 as uuidv4 } from 'uuid';
const LiveChat = () => {
    const [msg, setMsg] = useState('');
    const dispatch = useDispatch();
    useEffect(()=>{
        // let index = 0;
        const intervalId = setInterval(()=>{
            dispatch(addChat({
                name:"Nikhil",
                message: "this is live message " + uuidv4(),
                id:uuidv4()
            }));
            // index = index+1;
        },1500);
        return ()=>{
            clearInterval(intervalId);
        }
    },[]);
    const messages = useSelector((app)=>app.chat.messages);
    const handleSubmit = (e) => {
        e?.preventDefault();
        dispatch(addChat({
            name:'Anon User',
            message: msg,
            id: uuidv4()
        }));
        setMsg('');
    }
    return (
      <div>
        <div className="ml-1 p-2 border border-black h-[400px] w-full bg-gray-100 rounded-lg overflow-scroll flex flex-col-reverse">
          {/* we r using key as index as dont have any id  */}
          {messages?.map((msg, i) => {
            return (
              <ChatMessage name={msg.name} message={msg.message} key={msg.id} />
            );
          })}
        </div>
        <form className="w-full mt-2 p-2 flex" onSubmit={handleSubmit}>
        <input type="text" className="w-80 p-2 border border-black " value={msg} onChange={(e)=>setMsg(e.target.value)} />
        <button className="px-2 mx-2 bg-green-100">Send</button>
        </form>
      </div>
    );
}

export default LiveChat;