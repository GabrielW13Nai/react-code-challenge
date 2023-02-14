import React, { useState, useEffect } from "react";
const baseURL = 'http://localhost:8002/bots'

function BotCollection() {
  const[botdata, Setbots] = useState([])
  

  useEffect(() => {
    fetch('http://localhost:8002/bots')
    .then((r) => r.json()
    .then(data=> Setbots(data)))
  },[])
  
  return (
    <div className="ui four column grid">
      <div className="row">
        <div>
          {botdata.map((info) =>{
             return <>
             <div className="img">
             <img 
              src={info.avatar_url}
              alt="Bot image not found"
              />
             </div>
           
            <div style={{backgroundColor: '#D3D3D3' }} key={info.name}>
              {info.name}
            </div>
            <div key={info.id} style={{backgroundColor: '#D3D3D3' }}>{info.catchphrase}</div>
            <div className="attributes">
              <p key={info.health}>{info.health}</p>
              <p key={info.damage}>{info.damage}</p>
              <p key={info.armor}>{info.armor}</p>
            </div>
            </>
          })}

        </div>
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
