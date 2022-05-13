export function parseAvgGrade(data) {
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

    let response = [
        {
            id: "grade",
            color: "hsl(37, 70%, 50%)",
            data: semester.reverse()
        }
    ]

    return response;
}