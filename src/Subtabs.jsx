import React, { useState } from "react";
import "./Topic.css"
let Subtabs = (props) => {
    console.log(props);
    let [isVisible, setIsVisible] = useState(props.item.defaultVisibility);

    return (
        <>
            <button className={isVisible === false ? "topic-button" : "topic-button active"}
                onClick={() => {
                    setIsVisible((isVisible = isVisible === true ? false : true));
                }}>{props.item.name}</button>
            <br />
            <p className={isVisible === false ? "topic-hide-display" : "topic-show-display"}>{props.item.answer}</p>
        </>
    )
}

export default Subtabs;
