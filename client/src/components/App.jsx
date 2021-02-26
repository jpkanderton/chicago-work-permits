import React from 'react';
import axios from 'axios';
import Dashboard from './Dashboard.jsx';
import Header from './Header.jsx';
import Pending from './Loading.jsx';

const App = () =>{
  const { useState, useEffect } = React;
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
  </div>)
}

export default App;
