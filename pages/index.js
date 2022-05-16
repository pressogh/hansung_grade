import React, { useEffect } from "react";
import { Card, Loading } from "@nextui-org/react";
import Title from "../components/Title";

import { useRecoilState } from "recoil";
import { gradeData } from "../utils/states";
import { getGrade } from "../utils/api";
import MGPAGraph from "../components/MGPAGraph";
import GPAGraph from "../components/GPAGraph";

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

            {/*<Card css={{ "width": "50vw", "margin-top": "10vw" }} >*/}
            {/*    <div className="chart">*/}
            {/*        {*/}
            {/*            grade === "loading" || grade === "" ?*/}
            {/*                <Loading size="xl" />*/}
            {/*                :*/}
            {/*                <MGPAGraph data={grade} />*/}
            {/*        }*/}
            {/*    </div>*/}
            {/*</Card>*/}

            <div className="chart">
                {
                    grade === "loading" || grade === "" ?
                        <Loading size="xl" />
                        :
                        <MGPAGraph data={grade} />
                }
            </div>

            <style jsx>{`
                .container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .chart {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 50vh;
                    background: white;
                    
                    width: 80vw;
                    margin-top: 15vh;
                }
            `}</style>
        </div>
    );
}
