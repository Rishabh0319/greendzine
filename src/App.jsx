import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import List from "./components/List";

const App = () => {
  // cards state management
  const [users, setUsers] = useState([]);

  // search query state
  const [searchTerm, setSearchTerm] = useState("");

  // fetch data from api
  useEffect(() => {
    // function for calling api
    const fetchData = async () => {
      try {
        const response = await fetch(`https://reqres.in/api/users?page=2`);
        const data = await response.json();

        const filteredUsers = data.data.filter((user) =>
          user.first_name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
        );
        setUsers(filteredUsers);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchData(); // function call
  }, [searchTerm]);

  return (
    <div className="app">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <List datalist={users} />
    </div>
  );
};

export default App;
