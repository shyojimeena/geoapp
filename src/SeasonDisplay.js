import React, { Component } from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
    summer : {
        text : "Bro go to swimming pool",
        iconName: 'sun'
    },
    winter : {
        text : "Hey dude it's too cold",
        iconName: 'snowflake'

    }

};

const getSeason = (lat,month) => {

    if(month > 2 && month <9){
        return lat > 0 ? 'summer': 'winter';
    }
    else {
        return lat>0 ? 'winter': 'summer';
    }

};

const  SeasonDisplay = (props) =>{

  const season = getSeason(props.lat,new Date().getMonth());  

  const {text,iconName} = seasonConfig[season];

//   const text = season==='winter' ? "Hey dude it's too cold": "Bro go to swimming pool"

//  const icon = season==='winter' ? 'snowflake':'sun';   const text = season==='winter' ? "Hey dude it's too cold": "Bro go to swimming pool"

//  const icon = season==='winter' ? 'snowflake':'sun';


// Icon not showing.

  return (
      <div className={`season-display ${season}`}>
          <i className={`icon-left massive ${iconName} icon`} />
          <i className = "snowflake" />
          <h1>{text}</h1>
          <i className={`icon-right massive ${iconName} icon`} />
      </div>

  );
};

export default SeasonDisplay;