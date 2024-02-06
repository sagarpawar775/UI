"use client";

import React, { useState } from "react";
import axios from "axios";
import { Api } from "@/services/Api";
export const Register = ({ fnGetUsers }) => {
  const [data, setData] = useState({});
  const fnchange = (eve) => {
    const { value, name, type, checked } = eve.target;

    if (type === "checkbox") {
      const checkedValue = data["hobbies"] ? data["hobbies"].split(",") : [];
      if (checked) {
        checkedValue.push(value);
      } else {
        checkedValue.splice(checkedValue.indexOf(value));
      }
      setData({ ...data, hobbies: checkedValue.join() });
    } else {
      setData({ ...data, [name]: value });
    }
  };
  const fnregister = async () => {
    try {
      console.log(data);
      const res = await Api.sendPostReq("std/reg-std", {
        data,
      });

      const { acknowledged, insertedId } = res.data;
      if (acknowledged && insertedId) {
        setData({
          uid: "",
          pwd: "",
          gen: "",
          hobbies: "",
          country: "",
          address: "",
        });
        alert("success");
        fnGetUsers();
      } else {
        alert("Not inserted");
      }
    } catch (ex) {
      console.error(ex.message);
    } finally {
    }
  };
  return (
    <div>
      <h2>Register</h2>

      <p>
        <b>User ID :</b>{" "}
        <input name="uid" value={data.uid} onChange={fnchange} />
      </p>

      <p>
        <b>Password :</b>
        <input name="pwd" value={data.pwd} onChange={fnchange} />
      </p>

      <p>
        <b>Gender :</b>
        <input
          name="gen"
          checked={data.gen === "M"}
          type="radio"
          value="M"
          onChange={fnchange}
        />
        Male
        <input
          name="gen"
          checked={data.gen === "F"}
          value="F"
          type="radio"
          onChange={fnchange}
        />
        Female
      </p>

      <p>
        <b>Hobbies :</b>
        <input
          name="crick"
          checked={data.hobbies?.includes("cric")}
          value="cric"
          type="checkbox"
          onChange={fnchange}
        />
        Cricket
        <input
          name="fb"
          checked={data.hobbies?.includes("fb")}
          value="fb"
          type="checkbox"
          onChange={fnchange}
        />
        Football
      </p>

      <p>
        <b>Country :</b>
        <select name="country" onChange={fnchange} value={data.country}>
          <option> Please select</option>
          <option value="ind"> India</option>
          <option value="pak"> Pak</option>
          <option value="eng"> Eng</option>
          <option value="aus"> Aus</option>
        </select>
      </p>

      <p>
        <b>Address :</b>
        <textarea
          name="address"
          value={data.address}
          onChange={fnchange}
        ></textarea>
      </p>
      <p>
        <button onClick={fnregister}>Register</button>
      </p>
    </div>
  );
};

export default Register;
