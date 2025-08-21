// const people=[
//     {
//         name:"venky",
//         city:"yemmiganur"
//     },
//     {
//         name:"Raja",
//         city:"kurnool"
//     },
//     {
//         name:"umesh",
//         city:"guntur"
//     },
//     {
//         name:"Narendra",
//         city:"adoni"
//     },
//     {
//       name:"Pavan",
//       city:"kurnool"
//     },

// ];
// export default people;
import React from "react";
import "./Member.css";
const Member = (props) => {
  return (
    <div className="memberCard">
      <h2>{props.name}</h2>
      <p className="member-sub-heading">{props.city}</p>
      {/* <h2>{props.name}</h2>
      <p>{props.city}</p> */}
    </div>
  );
};

export default Member;
