import React, { useEffect } from "react";
import {Loading, Text} from "@nextui-org/react";
import Title from "../components/Title";

import { useRecoilState } from "recoil";
import { gradeData } from "../utils/States";
import { getGrade } from "../utils/Api";
import LineGraph from "../components/Graph/LineGraph";
import RandomGraph from "../components/Graph/RandomGraph";

export default function Home() {
    const [grade, setGradeData] = useRecoilState(gradeData);

    useEffect(() => {
        if (!grade) {
            const username = localStorage.getItem("username");
            const password = localStorage.getItem("password");

            if (username !== null && password !== null) {
                getGrade(username, password)
                    .then((data) => {
                        setGradeData(data);
                    })
            }
        }
    }, []);

    return (
        <div className="container">
            <Title title="한움" />

            <div className="chart">
                <h1 className="chart-title">
                    전공<br />평균학점
                </h1>
                <div className="chart-border">
                    {
                        grade === "" ?
                            <RandomGraph /> : grade === "loading" ?
                                <Loading size="xl" /> : <LineGraph data={grade} type={"BothGPA"} />
                    }
                </div>
            </div>

            <style jsx>{`
                .container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                }
                .chart {
                    display: flex;
                    flex-direction: row;
                    margin-top: 20vh;
                }
                .chart-border {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 60vw;
                    height: 50vh;
                    background: white;
                    padding: 1vw;
                    border-radius: 3vmin;
                    box-shadow: 0 10px 50px -3px rgba(0,0,0,0.1);
                }
                .chart-title {
                    margin-right: 3vw;
                }
            `}</style>
        </div>
    );
}
