import { ResponsiveLine } from '@nivo/line'
import { parseMGPA } from "../../utils/util";
import { Tooltip } from "./Tooltip";

export default function MGPAGraph({ data }) {
    return (
        <>
            <ResponsiveLine
                data={parseMGPA(data)}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{
                    type: 'linear',
                    min: 'auto',
                    max: 'auto',
                    stacked: true,
                    reverse: false
                }}
                yFormat=" >-.2f"
                colors={{ scheme: 'pastel1' }}
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabelYOffset={-12}
                useMesh={true}
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 100,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
                tooltip={(input) => {
                    return (
                        <Tooltip data={input} />
                    )}
                }
            />

            <style jsx>{`
                .tooltip-container {
                    padding: 10px;
                    border: 1px solid black;
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
        </>
    )
}