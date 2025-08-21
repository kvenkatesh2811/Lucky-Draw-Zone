import React from "react";
import AboutUs from "./Components/AboutUs/AboutUs";
import Member from "./Components/Members/Member";
import "./App.css";
import Header from "./Components/Header/Header";
import MemberList from "./Components/MemberList/MemberList";
import Section from "./Components/Section";

const App = () => {
  return (
    <div>
      {/* <h1 style={{ backgroundColor: "blue", textAlign: "center" }}>
        Friends Forever
      </h1> */}
      <Header />
      <div className="center-screen">
        {/* <AboutUs /> */}
        <Section title="AboutUS">
          <AboutUs />
        </Section>

        <Section title="Members">
          <MemberList />
        </Section>
        {/* <Member name="venky" city="Hyderabad" />
        <Member name="Ram" city="yemmiganur" />
        <Member name="madhu" city="yemmiganur" /> */}
      </div>
    </div>
  );
};

export default App;
