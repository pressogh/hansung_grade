import React from 'react';
import { ApiError } from "next/dist/server/api-utils";
import { toast } from 'react-toastify';
import {ErrorMessage} from "./ErrorMessage";

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

    const res = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_URL}/api/grade`, requestOptions)
        .then((response) => {
            if (!response.ok) {
                if (ErrorMessage[response.status]) toast.error(`[${response.status}] ${ErrorMessage[response.status]}`, {
                    theme: "colored"
                });
                else toast.error(`[${response.status}] ${response.statusText}`, {
                    theme: "colored"
                });
                return "";
            } else {
                return response.json();
            }
        })
        .catch((error) => {
            toast.error(`[500] ${ErrorMessage["500"]}`, {
                theme: "colored"
            });
            return "";
        })

    if (rememberMe === true && res) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
    }

    return res;
}


export const getInfo = async (username, password, rememberMe) => {
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

    const res = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_URL}/api/info`, requestOptions)
        .then((response) => {
            if (!response.ok) {
                if (ErrorMessage[response.status]) toast.error(`[${response.status}] ${ErrorMessage[response.status]}`, {
                    theme: "colored"
                });
                else toast.error(`[${response.status}] ${response.statusText}`, {
                    theme: "colored"
                });
                return "";
            } else {
                return response.json();
            }
        })
        .catch((error) => {
            toast.error(`[500] ${ErrorMessage["500"]}`, {
                theme: "colored"
            });
            return "";
        })

    if (rememberMe === true && res) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
    }

    return res;
}