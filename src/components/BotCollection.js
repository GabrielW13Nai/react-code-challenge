import React, { useState, useEffect } from "react";
import BotSpecs from "./BotSpecs";
import YourBotArmy from "./YourBotArmy";
const baseURL = 'http://localhost:8002/bots'

function BotCollection({bots}) {
  const[botdata, Setbots] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:8002/bots')
    .then((r) => r.json()
    .then(data=> Setbots(data)))
  },[])
<BotCollection />;
const botreturn = botdata.map((info) =>{
    return <BotSpecs avatar_url = {info.avatar_url} name ={info.name} catchphrase = {info.catchphrase} health={info.health} damage = {info.damage} 
    armor= {info.armor} />} 
    )
  

  
  return (
    <div className="ui four column grid" >
      <div className="row">
        <div>
          {botreturn} 
        </div>
      </div>
    </div>
  );
}

export default BotCollection;


//  return <>
            //  <div className="img">
            //  <img 
            //   src={info.avatar_url}
            //   alt="Bot image not found"
            //   />
            //  </div>
           
            // <div className = "attributes"style={{backgroundColor: '#D3D3D3' }} key={info.name}>
            //   {info.name}
            // </div>
            // <div key={info.id} style={{backgroundColor: '#D3D3D3' }}>{info.catchphrase}</div>
            // <div className="attributes">
            //   <p key={info.health}>{info.health}</p>
            //   <p key={info.damage}>{info.damage}</p>
            //   <p key={info.armor}>{info.armor}</p>
            // </div>
            // </>
            // Name = info.name,
            // url = info.avatar_url,
            // id = info.id,
            // catchphrase = info.catchphrase,
            // health = info.health,