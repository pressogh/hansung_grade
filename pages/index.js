import React, { useEffect } from "react";
import dynamic from 'next/dynamic'
import { Button, Card, Loading } from "@nextui-org/react";
import Title from "../components/Title";

import { useRecoilState } from "recoil";
import { gradeData } from "../utils/states";
import { getGrade } from "../utils/api";

const GradeGraph = dynamic(() => import("../components/Graph"), { ssr: false });

export default function Home() {
    const [grade, setGradeData] = useRecoilState(gradeData);

    useEffect(() => {
        const username = localStorage.getItem("username");
        const password = localStorage.getItem("password");

        if (username !== null && password !== null) {
            getData(username, password);
        }
    }, [])

    const getData = async (username, password) => {
        setGradeData(await getGrade(username, password));
    }
    

    return (
        <div>
            <Title title="한움" />
            <div className="chart">
                {
                    grade === "loading" || grade === "" ?
                        <Loading size="xl" />
                            :
                        <GradeGraph data={grade} />
                }
            </div>

            <style jsx>{`
                .chart {
                    margin-top: 20vh;
                    height:40vh;
                    width:50vw;
                    background: white;
                }
            `}</style>
        </div>
    );
}
