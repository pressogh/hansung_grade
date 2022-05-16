import React from 'react';

export const getGrade = async (username, password, rememberMe) => {
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

    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/grade`, requestOptions)
        .then((response) => {
            return response.json();
        })
        .catch((error) => {
            console.log("[Error] ", error);
        })

    if (rememberMe === true) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
    }

    return JSON.parse(res);
}