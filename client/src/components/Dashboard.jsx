import React from 'react';
import Panel from './Panel.jsx';

const { useState } = React;

const Dashboard = ({data, currentPermit, clickEvent}) =>{
  return (
    <div id="dashboard">
      {
        data.map((item, index) => {
          return (
            <Panel id={index} key={item.id} permitData={item} currentPermit = {currentPermit} clickEvent={clickEvent}/>
          )
        })
      }
    </div>
  )
}

export default Dashboard;