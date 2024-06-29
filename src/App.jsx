import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import List from "./components/List";
import { useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <div className="container">
      <h1 className="text-center my-5">User Panel</h1>
      <Form addUser={addUser} />
      <List users={users} />
    </div>
  );
};

export default App;
