import { Children } from "react";
const Section = (props) => {
  console.log("section props", props);
  const { title, children } = props;
  //   console.log(title);
  return (
    <div>
      <h2 className="margin-vertical10">{title} </h2>
      {children}
    </div>
  );
};
export default Section;
