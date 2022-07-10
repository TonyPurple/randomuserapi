import React, { useState, useEffect } from "react";
import axios from "axios";
 
const App = () => {
  const [users, setUsers] = useState([]);
  const [store, setStore] = useState([]);

  const getUsers = () => {
    axios
      .get("https://randomuser.me/api/?results=10&inc=name,registered&nat=fr")
      .then((response) => {
        const newData = response.data.results.map((result) => ({
          name: `${result.name.first} ${result.name.last}`,
          id: result.registered
        }));
        setUsers(newData);
        setStore(newData);
      })
      .catch((error) => {
        console.log(error);
      });
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
