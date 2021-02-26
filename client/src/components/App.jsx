import React from 'react';
import axios from 'axios';
import Dashboard from './Dashboard.jsx';
import Header from './Header.jsx';
import Pending from './Loading.jsx';

const App = () =>{
  const { useState, useEffect } = React;
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/getPermits')
    .then(result => {
      console.log(result.data);
      setData(result.data);
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
