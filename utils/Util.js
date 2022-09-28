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

// 평균 학점
export function parseGPA(data) {
    let semester = [];

    for (let item in data) {
        const year = data[item]["semester"].split("학년도")[0];
        const semesterNum = data[item]["semester"].split("학년도")[1].split("학기")[0];

        if (window.innerWidth > 775) {
            semester.push(
                {
                    x: year + "학년도 " + semesterNum + "학기",
                    y: data[item]["average_credits"],
                    subject: data[item]["subject"]
                }
            );
        } else {
            semester.push(
                {
                    x: year + "." + semesterNum + ".",
                    y: data[item]["average_credits"],
                    subject: data[item]["subject"]
                }
            );
        }
    }

    return [
        {
            id: "평균 학점",
            color: "hsl(37, 70%, 50%)",
            data: semester.reverse()
        }
    ];
}

// 전공 평균 학점
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
                mgpa: mgp === 0 ? 0 : Math.floor(mgp / mcount * 100) / 100,
                subject: subjectList
            }
        )
    }

    for (let item in mgpaList) {
        const year = mgpaList[item]["semester"].split("학년도")[0];
        const semesterNum = mgpaList[item]["semester"].split("학년도")[1].split("학기")[0];

        if (window.innerWidth > 775) {
            semester.push(
                {
                    x: year + "학년도 " + semesterNum + "학기",
                    y: mgpaList[item].mgpa,
                    subject: mgpaList[item].subject
                }
            );
        } else {
            semester.push(
                {
                    x: year + "." + semesterNum + ".",
                    y: mgpaList[item].mgpa,
                    subject: mgpaList[item].subject
                }
            );
        }
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

    const now = new Date();
    for (let i = 0; i < 6; i++) {
        now.setDate(now.getDate() - 182);

        // vw가 775px 이하라면
        if (window.innerWidth > 775) {
            res.push(
                {
                    x: now.getFullYear() + "학년도" + (now.getMonth() > 6 ? " 2학기" : " 1학기"),
                    y: (Math.round((Math.random() * (4.5 - 3.5) + 3.5) * 100) / 100).toString()
                }
            );
        } else {
            res.push(
                {
                    x: now.getFullYear() + "." + (now.getMonth() > 6 ? " 2." : " 1."),
                    y: (Math.round((Math.random() * (4.5 - 3.5) + 3.5) * 100) / 100).toString()
                }
            );
        }
    }

    return [
        {
            id: "평균 학점",
            data: res.reverse()
        }
    ];
}