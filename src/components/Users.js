import {useState, useEffect} from "react";

const Users = ({users}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const[isClicked, setIsClicked] = useState(false);

  const handleChange = event => {
    setIsClicked(true);
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const results = users.filter(user =>
      user.first_name.toLowerCase().includes(searchTerm) || user.last_name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div>
      <h2>USERS</h2>

      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
        style={{width: "120px", height: "30px", marginBottom:"10px"}}
      />

      {!isClicked ? users.map(user =>
      <div>
      <img src={user.avatar} alt="avatar"/>
      <p>{user.first_name} {user.last_name}</p>      
      </div>)
      : searchResults.map(user =>
        <div>
        <img src={user.avatar} alt="avatar"/>
        <p>{user.first_name} {user.last_name}</p>      
        </div>)}
    </div>
  )
}

export default Users