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


 
}

export default UsersTable;