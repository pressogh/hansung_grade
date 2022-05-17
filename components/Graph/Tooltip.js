import {Card, Text} from "@nextui-org/react";
import {gradeWeight} from "../../utils/util";

export const Tooltip = ({ data }) => {
    let lst = data.point.data.subject.slice();
    lst.sort((a, b) => {
        if (gradeWeight[a.grade] < gradeWeight[b.grade]) return 1;
        else return -1;
    })

    return (
        <Card className="tooltip-container">
            <div className='tooltip-item title'>
                <Text weight={"bold"}>{ data.point.serieId }</Text>
                <Text>{data.point.data.y}</Text>
            </div>
            {
                lst.map((item) => {
                    return (
                        <div key={item.name} className="tooltip-item">
                            <div className='tooltip-name'>
                                { item.name }
                            </div>
                            <div className='tooltip-grade'>
                                { item.grade }
                            </div>
                        </div>
                    );
                })
            }

            <style jsx>{`
                .tooltip-container {
                }

                .title {
                    margin-bottom: 1vh;
                }

                .tooltip-item {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                }

                .tooltip-name {
                    margin-right: 1vw;
                }
                
                .tooltip-grade {
                    margin-left: 1vw;
                }
            `}</style>
        </Card>
    )
}