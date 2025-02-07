import { useEffect, useState, useCallback } from "react";
const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);
  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(url);
      const users = await response.json();
      setUsers(users);
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h2>fetch data example</h2>
      <section>
        <h3>Github Users</h3>
        <ul className="users">
          {users.map((user) => {
            const { id, login, avatar_url, html_url } = user;
            return (
              <li key={id}>
                <img src={avatar_url} alt={login} />
                <div>
                  <h5>{login}</h5>
                  <a href={html_url}>Profile</a>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};
export default FetchData;
