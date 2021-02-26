import React from 'react';
import axios from 'axios';
import Dashboard from './Dashboard.jsx';
import Header from './Header.jsx';
import Pending from './Loading.jsx';

const { useState, useEffect } = React;

const App = () =>{
  const [data, setData] = useState([]);
  const [currentPermit, setCurrentPermit] = useState({});

  const clickEvent = (num) => {
    setCurrentPermit(data[num])
  }

  useEffect(() => {
    axios.get('/getPermits')
    .then(result => {
      setData(result.data);
      setCurrentPermit(result.data[0])
    })
    .catch(error => {
      console.log('error is: ', error);
    })
  }, []);

  return (
  <div id="app-container">
    <Header />
    {data.length > 0 ? <Dashboard data = {data} currentPermit = {currentPermit} clickEvent= {clickEvent} /> : <Pending />}
  </div>)
}

export default App;
