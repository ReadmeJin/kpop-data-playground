import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import { data } from '../../api/getYoutubeStatsData';
import { AxisTickProps } from '@nivo/axes'

type Props = {}

export default function LineGraph({ }: Props) {

    return (
        <div className='graph-line_wrapper max-w-[60vw] min-h-[60vh] h-0 w-4/6 my-[30vh] inline-block'>
            <ResponsiveLine
                data={data}
                gridYValues={[0, 20, 40, 60]}
                margin={{ top: 20, right: 50, bottom: 120, left: 120 }}
                animate={true}
                lineWidth={4}
                curve="monotoneX"
                colors={["#eceae5"]}
                enableGridX={false}
                enableCrosshair={false}
                pointSize={24}
                pointColor="#eceae5"
                pointBorderWidth={5}
                pointBorderColor="#050709"
                useMesh={true}
                yScale={{
                    type: "linear",
                    min: 0,
                    max: 60
                }}
                axisLeft={{
                    tickValues: [0, 20, 40, 60],
                    format: value => Number(value) === 0 ? value : `${value}M`,
                    tickSize: 0,
                    tickPadding: 80,
                    renderTick: CustomTick
                }}
                axisBottom={{
                    tickSize: 0,
                    tickPadding: 80,
                    renderTick: CustomTick
                }}
                theme={{
                    grid: {
                        line: {
                            opacity: 0.5,
                            stroke: "#eceae5"
                        }
                    }
                }}
            />
        </div >
    )
}

const CustomTick = (tick: AxisTickProps<string>) => {

    return (
        <g transform={`translate(${tick.x},${tick.y})`}>
            <text
                textAnchor="middle"
                dominantBaseline="middle"
                className='fill-black dark:fill-cream'
                style={{
                    fontFamily: "'Noto Serif Display', serif",
                    fontSize: "clamp(24px,2vw,32px)",
                }}
                transform={`translate(${tick.textX},${tick.textY})`}
            >
                {tick.format ? tick.format(tick.value) : tick.value}
            </text>
        </g>
    )
}