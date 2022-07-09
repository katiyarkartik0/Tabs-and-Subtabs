import React, { useState } from "react";
import Subtabs from "./Subtabs";
import "./Topic.css";
let Tabs = (props) => {
  let [isVisible, setIsVisible] = useState(props.item.defaultVisibility);
  //console.log(props);
  return (
    <>
      <button
        className={isVisible === false ? "" : "active"}
        onClick={() => {
          setIsVisible((isVisible = isVisible === true ? false : true));
        }}
      >
        {props.item.name}
      </button>
      <div className={isVisible === false ? "topic-hide-display" : "topic-show-display"}>
        {props.item.subTabs.map((item) => {
          return (
            <>
              <Subtabs item={item} />
            </>
          );
        })}
      </div>
      <br/>
    </>
  );
};

export default Tabs;
