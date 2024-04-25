import { useState } from "react";
import axios from "axios";
const useAuth = () => {
  const [user, setUser] = useState(null);
  const login = (email, password) => {
    // Logic to set the user
  };
  const logout = () => {
    axios.post('http://localhost:4002/logout', {}) // Assuming logout doesn't need body data
      .then(response => {
        console.log(response.data); // Handle response as needed
        setUser(null); // Assuming setting user to null logs them out
      })
      .catch(error => console.error('Logout failed:', error)); // Handle error
  };
  return { 
    user,
    login,
    logout
  };
};
export default useAuth;