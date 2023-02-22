import React, { useState } from "react";
import BotCollection from "./BotCollection";


function YourBotArmy() {
 
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
         <BotCollection />
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
