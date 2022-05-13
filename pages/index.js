import React, { useEffect } from "react";
import dynamic from 'next/dynamic'
import { Button, Loading } from "@nextui-org/react";
import Title from "../components/Title";

import { useRecoilState } from "recoil";
import { gradeData } from "../utils/states";

const GradeGraph = dynamic(() => import("../components/Graph"), { ssr: false });

export default function Home() {
    const [grade, setGradeData] = useRecoilState(gradeData);    

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
                    height:50vh;
                    width:50vw;
                    background: white;
                }
            `}</style>
        </div>
    );
}
