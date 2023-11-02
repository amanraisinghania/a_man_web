"use client";
import { getDatabase, ref, onValue } from "firebase/database";
import Image from "next/image";
import style from "./home.module.css";
import bg from "./bg.png";
import { BsWhatsapp, BsMessenger } from "react-icons/bs";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { AiFillStar, AiFillSetting, AiOutlineMenu } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BiNotepad } from "react-icons/bi";
import { useEffect, useState } from "react";
import { app } from "../firebase";

export default function Home() {
  const [name, setName] = useState("");

  function read() {
    const db = getDatabase(app);
    const starCountRef = ref(db, "name");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setName(data);
      console.log("data => ", data);
    });
  }

  useEffect(() => {
    read();
  }, []);

  const [data, setData] = useState([
    {
      msg: "Hi!",
      user: "aman",
    },
    {
      msg: "Hello!",
      user: "vijay",
    },
    {
      msg: "How are you!",
      user: "aman",
    },
    {
      msg: "i am fine.",
      user: "vijay",
    },
    {
      msg: "Hi!",
      user: "aman",
    },
    {
      msg: "Hello!",
      user: "vijay",
    },
    {
      msg: "How are you!",
      user: "aman",
    },
    {
      msg: "i am fine.",
      user: "vijay",
    },
    {
      msg: "Hi!",
      user: "aman",
    },
    {
      msg: "Hello!",
      user: "vijay",
    },
    {
      msg: "How are you!",
      user: "aman",
    },
    {
      msg: "i am fine.",
      user: "vijay",
    },
    {
      msg: "Hi!",
      user: "aman",
    },
    {
      msg: "Hello!",
      user: "vijay",
    },
    {
      msg: "How are you!",
      user: "aman",
    },
    {
      msg: "i am fine.",
      user: "vijay",
    },
    {
      msg: "Hi!",
      user: "aman",
    },
    {
      msg: "Hello!",
      user: "vijay",
    },
    {
      msg: "How are you!",
      user: "aman",
    },
    {
      msg: "i am fine.",
      user: "vijay",
    },
  ]);

  const list = [
    { people: "aman" },
    { people: "aman 1" },
    { people: "aman 2" },
    { people: "aman 3" },
    { people: "aman 4" },
    { people: "aman 5" },
    { people: "aman 6" },
    { people: "aman 7" },
    { people: "aman 8" },
    { people: "aman 9" },
    { people: "aman 0" },
  ];

  const [msgInput, setMsgInput] = useState("Inoutd asd");

  function addChat() {
    setData((prev) => [
      ...prev,
      {
        msg: msgInput,
        user: "aman",
      },
    ]);
  }

  return (
    <>
      <div
        style={{
          overflow: "hidden",
          padding: 10,
          display: "flex",
          gap: 10,
          height: "100vh",
          width: "100vw",
          background: "black",
        }}
      >
        {/* Left Side Bar */}
        <div className={style.sideBar}>
          <div>
            <BsMessenger color="#808080" size={30} />
            <HiOutlineStatusOnline color="#808080" size={30} />
          </div>
          <div>
            <AiFillStar color="#808080" size={30} />
            <AiFillSetting color="#808080" size={30} />
            <CgProfile color="#808080" size={30} />
          </div>
        </div>
        {/* Left Side Bar Ends */}

        {/* Left Chat Side close */}
        <div className={style.bodyLeft}>
          <div className={style.chat}>User Name</div>
          <input className={style.input} type="text" placeholder="chat" />
          {/* // Chat Head */}
          <div className={style.sting}>
            {list.map((e) => {
              return (
                <div
                  key={e}
                  className={style.empo}
                  style={{
                    display: "flex",
                    gap: 10,
                    alignItems: "center",
                    color: "white",
                  }}
                >
                  <Image
                    src="/1.jpg"
                    width={50}
                    height={50}
                    style={{
                      borderRadius: 50,
                      aspectRatio: 1,
                    }}
                  />
                  <h1>hi</h1>
                </div>
              );
            })}
          </div>
          {/* // Chat Head Close */}
        </div>
        {/* Left Side close */}

        {/* Right Chat Side */}
        <div
          style={{
            height: "100%",
            backgroundImage: "url(" + bg.src + ")",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 5,
            borderRadius: 10,
          }}
          className={style.bodyRight}
        >
          {/* Top Bar */}
          <div className={style.topmain}>
            <Image
              src="/1.jpg"
              width={40}
              height={40}
              style={{
                borderRadius: 50,
                margin: 5,
              }}
            />
            <p
              style={{
                marginTop: "auto",
                marginBottom: "auto",
                color: "white",
              }}
            >
              Aman
            </p>
          </div>

          {/* All Chats */}
          <div
            className={style.body2}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              padding: 10,
            }}
          >
            {data.map(function (a) {
              return a.user == "aman" ? (
                <div className={style.text}>
                  <span className={style.mess}>{a.msg}</span>
                </div>
              ) : (
                <div className={style.text2}>
                  <span className={style.mess2}>
                    hellodasdasjdhghdashdsahdashdghashasjhsdjashdgasdasdkashdjashkjash
                  </span>
                </div>
              );
            })}
          </div>

          {/* Send Button */}
          <div
            style={{
              display: "flex",
              marginBottom: 5,
              marginLeft: 5,
              marginRight: 5,
              gap: 5,
            }}
          >
            <input
              type="text"
              placeholder="text your mess"
              value={msgInput}
              onChange={(e) => setMsgInput(e.target.value)}
              style={{
                flex: 1,
                borderRadius: 5,
                paddingLeft: 10,
              }}
            />

            <button
              style={{
                background: "yellow",
                color: "black",
                padding: 5,
                paddingLeft: 20,
                paddingRight: 20,
                borderRadius: 5,
              }}
              onClick={() => addChat()}
            >
              send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
