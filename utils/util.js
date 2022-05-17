import { useEffect, useRef } from "react";

export const gradeWeight = {
    "A+": 4.5,
    "A0": 4.0,
    "B+": 3.5,
    "B0": 3.0,
    "C+": 2.5,
    "C0": 2.0,
    "D+": 1.5,
    "D0": 1.0,
    "F0": 0.0,
    "P": 0.2,
    "N": 0.1
};

export function parseGPA(data) {
    let semester = [];

    for (let item in data) {
        semester.push(
            {
                x: data[item]["semester"],
                y: data[item]["average_credits"],
                subject: data[item]["subject"]
            }
        );
    }

    return [
        {
            id: "평균 학점",
            color: "hsl(37, 70%, 50%)",
            data: semester.reverse()
        }
    ];
}

export function parseMGPA(data) {
    let semester = [];
    let mgpaList = [];

    for (let item in data) {
        let mgp = 0.0, mcount = 0;
        let subjectList = [];
        for (let subject in data[item]["subject"]) {
            if (data[item]["subject"][subject].classification === "전필" || data[item]["subject"][subject].classification === "전선" || data[item]["subject"][subject].classification === "전기") {
                mgp += gradeWeight[data[item]["subject"][subject].grade];
                mcount++;
                subjectList.push(data[item]["subject"][subject]);
            }
        }

        mgpaList.push(
            {
                semester: data[item]["semester"],
                mgpa: mgp / mcount,
                subject: subjectList
            }
        )
    }

    for (let item in mgpaList) {
        semester.push(
            {
                x: mgpaList[item].semester,
                y: mgpaList[item].mgpa,
                subject: mgpaList[item].subject
            }
        );
    }

    return [
        {
            id: "전공 평균 학점",
            color: "hsl(37, 70%, 50%)",
            data: semester.reverse()
        }
    ];
}

export const randomData = () => {
    const res = [];

    for (let i = 0; i < 4; i++) {
        res.push(
            {
                x: i.toString(),
                y: (Math.round((Math.random() * (4.5 - 3) + 3) * 100) / 100).toString()
            }
        );
    }

    return [
        {
            id: "평균 학점",
            data: res
        }
    ];
}

export const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}