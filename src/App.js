import React, { useState, useEffect } from "react";
import axios from "axios";
 
const App = () => {
  const [users, setUsers] = useState([]);
  const [store, setStore] = useState([]);

  const getUsers = () => {
    axios.get("https://randomuser.me/api/?results=10&inc=name,registered&nat=fr")
    .then(response => console.log(response.data.results[0].name.first))
  };

  useEffect(() => {
    getUsers();
  }, []);
 
  return (
    <div>
      
    </div>
  );
};
 
export default App;
