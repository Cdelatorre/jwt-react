import { useEffect, useState } from 'react';
import { getUsers } from '../../services/UserService';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getUsers()
      .then((response) => {
        setUsers(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }
    , []);

  return (
    <div>
      Home

      {users.map((user) => (
        <div key={user.id}>{user.email}</div>
      ))}

      <button onClick={() => navigate('/login')}>Login</button>
    </div>
  );
};

export default Home;
