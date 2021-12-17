import {useState, useEffect} from "react";
import Users from "./components/Users";

const App = () => {
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setUsers(result.data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])



  return (
    <div>
      <h2>APP</h2>
      <Users users={users} /> 
    </div>
  );
}

export default App