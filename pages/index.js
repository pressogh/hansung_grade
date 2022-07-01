import React, { useEffect, useState } from "react";
import {Card, Loading, Text, Switch} from "@nextui-org/react";
import Title from "../components/Title";

import { useRecoilState } from "recoil";
import { gradeData, nowGradeData } from "../utils/States";
import {getGrade, getInfo, getNowGrade} from "../utils/Api";
import LineGraph from "../components/Graph/LineGraph";
import RandomGraph from "../components/Graph/RandomGraph";

export default function Home() {
    const [grade, setGrade] = useRecoilState(gradeData);
    const [nowGrade, setNowGrade] = useRecoilState(nowGradeData);
    const [contentType, setContentType] = useState(false);

    useEffect(() => {
        if (!grade) {
            const username = localStorage.getItem("username");
            const password = localStorage.getItem("password");

            if (username !== null && password !== null) {
                getGrade(username, password)
                    .then((data) => {
                        setGrade(data);
                    });
                getNowGrade(username, password)
                    .then((data) => {
                        setNowGrade(data);
                    });
            }
        }
    }, [grade, nowGrade]);

    const sortBySemester = (data) => {
        data.sort((a, b) => {
            return a.semester - b.semester;
        });

        return data;
    }

    return (
        <div className="container">
            <Title title="한움" />

            <div>
                <div className="lnb-border">
                    <div className="lnb-item">
                        <div>Line</div>
                        <Switch
                            checked={contentType}
                            onChange={() => {
                                setContentType(!contentType);
                            }}
                        />
                        <div>bar</div>
                    </div>
                </div>
            </div>

            <div>
                <div className="chart">
                    <div className="chart-border">
                        {
                            (grade === "" || nowGrade === "") ?
                                <RandomGraph /> : (grade === "loading" || nowGrade === "loading") ?
                                    <Loading size="xl" /> :
                                    <LineGraph data={sortBySemester([nowGrade, ...grade])} type={"BothGPA"} />
                        }
                    </div>
                </div>
            </div>

            <style jsx>{`
                .container {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                }
                .chart {
                    display: flex;
                    justify-items: center;
                    align-items: center;
                    margin-top: 15vh;
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
                .lnb-border {
                    display: flex;
                    justify-content: center;
                    width: 15vw;
                    height: 40vh;
                    background: white;
                    padding: 1vw;
                    border-radius: 3vmin;
                    box-shadow: 0 10px 50px -3px rgba(0,0,0,0.1);
                    margin: 15vh 5vw 0 0;
                }
                .lnb-item {
                    display: flex;
                    justify-content: space-between;
                    width: 60%;
                    border-bottom: 1px solid rgba(219, 219, 219, 1);
                }
            `}</style>
        </div>
    );
}
