import React, { useState, useEffect } from "react";
import axios from "axios";
import Lists from "./components/List";
import SearchBar from "./components/SearchBar";
 
const App = () => {
  const [users, setUsers] = useState([]);
  const [store, setStore] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = () => {
    axios.get("https://randomuser.me/api/?results=10&inc=name,registered&nat=fr")
      .then((response) => {
        const newData = response.data.results.map((result) => ({
          name: `${result.name.first} ${result.name.first}`,
          id: result.registered,
        }));
        setLoading(true);
        setUsers(newData);
        setStore(newData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const filterNames = (event) => {
    const filteredData = store.filter((item) =>
      item.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setUsers(filteredData);
  };

  useEffect(() => {
    getUsers();
  }, []);
 
  return (
    <>
      {loading ? (
        <div className="Card">
          <div className="header">NAME LIST</div>
          <SearchBar searchFunction={filterNames} />
          <Lists users={users} />
        </div>
      ) : (
        <div className="loader"></div>
      )}
    </>
  );
};
 
export default App;
