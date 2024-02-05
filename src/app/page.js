"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Register from "@/Register/Register";
import Students from "@/Students/Students";
import { useEffect, useState } from "react";
import axios from "axios";
export default function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fnGetUsers();
  }, []);

  const fnGetUsers = async () => {
    try {
      const res = await axios.get("http://localhost:2020/std/get-std");
      setUsers(res.data);
    } catch (ex) {
      setUsers({});
    }
  };

  return (
    <div>
      <Register fnGetUsers={fnGetUsers} />
      <Students users={users} />
    </div>
  );
}
