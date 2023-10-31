"use client";

import Image from 'next/image'
import style from "./home.module.css"
import bg from "./bg.png"
import { BsWhatsapp, BsMessenger } from "react-icons/bs";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { AiFillStar ,AiFillSetting,AiOutlineMenu} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BiNotepad } from "react-icons/bi";
import { useState } from 'react';


export default function Home() {

  const [data,setData] = useState([
    { 
      msg:"Hi!",
      user:"aman"
    },
    {
      msg:"Hello!",
      user:"vijay"
    },
    {
      msg:"How are you!",
      user:"aman"
  
    },
    {
      msg:"i am fine.",
      user:"vijay"
    },
    { 
      msg:"Hi!",
      user:"aman"
    },
    {
      msg:"Hello!",
      user:"vijay"
    },
    {
      msg:"How are you!",
      user:"aman"
  
    },
    {
      msg:"i am fine.",
      user:"vijay"
    },
    { 
      msg:"Hi!",
      user:"aman"
    },
    {
      msg:"Hello!",
      user:"vijay"
    },
    {
      msg:"How are you!",
      user:"aman"
  
    },
    {
      msg:"i am fine.",
      user:"vijay"
    },
    { 
      msg:"Hi!",
      user:"aman"
    },
    {
      msg:"Hello!",
      user:"vijay"
    },
    {
      msg:"How are you!",
      user:"aman"
  
    },
    {
      msg:"i am fine.",
      user:"vijay"
    },
    { 
      msg:"Hi!",
      user:"aman"
    },
    {
      msg:"Hello!",
      user:"vijay"
    },
    {
      msg:"How are you!",
      user:"aman"
  
    },
    {
      msg:"i am fine.",
      user:"vijay"
    }
  ]);

const list = [
  {people:"aman"},
   {people:"aman 1"},
    {people:"aman 2"},
     {people:"aman 3"},
     {people:"aman 4"},
     {people:"aman 5"},
     {people:"aman 6"},
     {people:"aman 7"},
     {people:"aman 8"},
     {people:"aman 9"},
     {people:"aman 0"},
]


function addChat(){
  setData(prev=> [...prev,{ msg:"Vijay",
  user:"aman"}] )
}

  return (
    
<>



    <div style={{
      overflow:"hidden"
    }}>
      <div className={style.upper}><BsWhatsapp color='white' size={30}/></div>      
    
      <div className={style.main}>
        <div className={style.side}>
          <div><BsMessenger color='white' size={30}/>
          <HiOutlineStatusOnline color='white' size={30}/></div>
          <div><AiFillStar color='white' size={30}/>
          <AiFillSetting  color='white' size={30}/>
          <CgProfile  color='white' size={30}/></div>
          </div>
        
        <div className={style.bodymain}>
              {/* Left Side */}
             <div className={style.body}>
                <div className={style.chat}>chat 
                  <div style={{
                    display:"flex",
                  }}>
                  <BiNotepad size={30}/>
                    <AiOutlineMenu size={30}/>
                  </div>
                </div>
                <div className={style.input}>
                  <input type="text" placeholder="chat"></input>
                </div>
                  {/* // Chat Head */}
                  <div className={style.sting}>
                
                            {
                              list.map((e)=>{
                                return(
                              <div className={style.empo} style={{
                                display:"flex",
                                gap:10,
                                alignItems:"center",
                                color:"white",
                              }}> 
                              <Image src="/1.jpg" width={50} height={50} style={{
                                borderRadius:50,
                                  aspectRatio:1,
                              }} />
                                <h1>hi</h1>
                                  </div>
                                )
                              })
                            }
                        
                  </div>
                      {/* // Chat Head Close */}
              </div>
              {/* Left Side close */}


              {/* Right Side */}

             

                <div>
                <div className={style.topmain}>
                <div className={style.top}><Image src="/1.jpg" width={50} height={50}/>
                <div className={style.mess}>hi</div></div>
              </div>
                  <div className={style.body2} style={{
                        backgroundImage: "url(" + bg.src + ")",
                        display:"flex",
                        flexDirection:"column",
                        gap:10,
                        padding:10,
                         }}> 
                        {data.map(function(a){
                          return (
                              a.user == "aman" ?  
                              <div className={style.text}><span className={style.mess}>{a.msg}</span></div> :
                              <div className={style.text2}><span className={style.mess2}>hellodasdasjdhghdashdsahdashdghashasjhsdjashdgasdasdkashdjashkjash</span>          
                              </div>
                          )
                        })}
               
                  </div>
                  <div>
                    <div style={{
                      display:"flex",
                      padding:10
                    }}>
                    <input type="text" placeholder="text your mess" 
                    onClick={()=>alert("hi")} style={{
                      marginBottom:10,
                      flex:1
                      }}></input>
                      <div style={{
                        color:"white",
                      }}>
                        <button style={{
                          marginRight:40,
                          background:"yellow",
                          color:"black",
                          padding:5,
                          paddingLeft:20,
                          paddingRight:20,
                        }} onClick={()=>addChat()}>send</button></div>
                      
                      </div>
                  </div>
                </div>
          </div>
 
        </div>

      </div>
      </>    
  )
}
