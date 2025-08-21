import React, { useState } from "react";
import Member from "../Members/Member";
import "./MemberList.css";
import StyleButton from "../styleButton/StyleButton";
import ReactConfetti from "react-confetti";
const peoples = [
  {
    name: "venky",
    city: "yemmiganur",
  },
  {
    name: "raj",
    city: "kurnool",
  },
  {
    name: "madhu",
    city: "yemmiganur",
  },
  {
    name: "Narendra",
    city: "Adoni",
  },
  {
    name: "santhosh",
    city: "chennai",
  },
  {
    name: "sai",
    city: "Hyderabad",
  },
  {
    name: "shiva",
    city: "kolkata",
  },
  // {
  //   name: "Ram",
  //   city: "mumbai",
  // },
  {
    name: "pavan",
    city: "kurnool",
  },
  {
    name: "raj",
    city: "kurnool",
  },
  {
    name: "madhu",
    city: "yemmiganur",
  },
  {
    name: "krishna",
    city: "Agra",
  },
  // {
  //   name: "somesh",
  //   city: "Bengaluru",
  // },
  {
    name: "umesh",
    city: "Lucknow",
  },
  // {
  //   name: "Uday",
  //   city: "Kanpur",
  // },
  {
    name: "fazil",
    city: "Pune",
  },
  {
    name: "karthik",
    city: "Jaipur",
  },
  // {
  //   name: "Likhith",
  //   city: "Surat",
  // },
];
const MemberList = () => {
  const [luckyPerson, setLuckyPerson] = useState("");
  const [showCelebration, setShowCelebration] = useState(false);
  const [isLoading, setLoading] = useState(false);
  function pickPerson() {
    setLoading(true);
    // console.log("have a lucky person");
    const randomNumber = Math.floor(Math.random() * peoples.length);
    // console.log("randomNumber", randomNumber);
    // console.log(peoples[randomNumber].name);
    const person = peoples[randomNumber];
    // console.log(`${person.name} from ${person.city}`);
    const luckyPerson = `${person.name} from ${person.city}`;
    setTimeout(function () {
      setLuckyPerson(luckyPerson);
      setLoading(false);
      setShowCelebration(true);
    }, 5000);
    // setLuckyPerson(luckyPerson);
  }
  return (
    <>
      {showCelebration && <ReactConfetti numberOfPieces={1000} wind={0.1} />}

      <div>
        {/* <h2 style={{ margin: "0px 0px 0px 25px" }}>Members</h2> */}
        <div className="member-container">
          {peoples.map((values) => {
            return <Member name={values.name} city={values.city} />;
          })}
        </div>
        {/* <button>Lucky draw</button> */}
        <div className="flex-center">
          {isLoading && <h3>Loading...</h3>}
          {isLoading || <h2>{luckyPerson}</h2>}
          <StyleButton text="Lucky Draw" onClick={pickPerson} />
        </div>
      </div>
    </>
  );
};

export default MemberList;
