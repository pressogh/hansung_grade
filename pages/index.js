import React, { useEffect } from "react";
import { Loading } from "@nextui-org/react";
import Title from "../components/Title";

import { useRecoilState } from "recoil";
import { gradeData } from "../utils/states";
import { getGrade } from "../utils/api";
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
                {
                    // TODO: Change Loading to RandomGraph
                    grade === "loading" || grade === "" ?
                        <Loading /> : <LineGraph data={grade} type={"BothGPA"} />
                }
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
                    justify-content: center;
                    align-items: center;
                    width: 80vw;
                    height: 50vh;
                    background: white;
                    margin-top: 15vh;
                    padding: 1vw;
                    border-radius: 3vmin;
                    box-shadow: 0 10px 50px -3px rgba(0,0,0,0.1);
                }
            `}</style>
        </div>
    );
}
