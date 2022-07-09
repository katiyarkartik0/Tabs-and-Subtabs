import React from "react";
import Data from "./Data.js";
import Tabs from "./Tabs.jsx";
import Subtabs from "./Subtabs.jsx";
function App() {
  //console.log(Data)
  return (
    <>
      {Data.map((item, index) => {
        return (
          <div className="tabs">
            <Tabs key={index} item={item} />
          </div>
        );
      })}
    </>
  );
}

export default App;
