import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import List from "./components/List";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://reqres.in/api/users?page=2");
        const data = await response.json();
        setUsers(data.data);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="app">
      <Header />
      <List datalist={users} />
    </div>
  );
};

export default App;
