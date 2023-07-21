'use client'

import { useEffect, useState } from "react";

const UsersTable = () => {
    const[reactData, setReactData] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      setReactData(data);
    }).catch((e) => {console.log(e)});
  }, []);

  return <table>
  <tr>
    <th colSpan='3' className='topnav'>Rendered By React JS | Client side rendered</th>
  </tr>
  {reactData.map((user, index) => (
    <tr>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
    </tr>
  ))}
</table>
}

export default UsersTable;