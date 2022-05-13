import React from 'react';
import axios from 'axios';

export const getGrade = async (username, password, rememberme) => {
    const data = {
        "username": username,
        "password": password
    };

    let requestOptions = {
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0'
      },
      method: 'POST',
      credentials: 'same-origin',
      body: JSON.stringify(data),
      redirect: 'follow',
    };

    const res = await fetch(`http://127.0.0.1:8000/api/grade`, requestOptions)
        .then((response) => {
            return response.json();
        })
        .catch((error) => {
            console.log("[Error] ", error);
        })

    if (rememberme === true) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
    }

    return JSON.parse(res);
}