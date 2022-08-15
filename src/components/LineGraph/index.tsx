import { ResponsiveLine } from '@nivo/line';
import { data } from '../../api/getYoutubeStatsData';
import { AxisTickProps } from '@nivo/axes'
import useDarkMode from '../../hooks/useDarkMode';

type Props = {}

export default function LineGraph({ }: Props) {
    const { isDarkMode } = useDarkMode();
    const ligthColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--color-cream');
    const darkColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--color-black');

    const lineGraphColor = isDarkMode ? `rgb(${ligthColor})` : `rgb(${darkColor})`;

    return (
        <ResponsiveLine
            data={data}
            gridYValues={[0, 20, 40, 60]}
            margin={{ top: 20, right: 50, bottom: 120, left: 120 }}
            animate={true}
            lineWidth={4}
            curve="monotoneX"
            colors={lineGraphColor}
            enableGridX={false}
            enableCrosshair={false}
            pointSize={24}
            pointColor={lineGraphColor}
            pointBorderWidth={5}
            pointBorderColor={lineGraphColor === `rgb(${ligthColor})` ? `rgb(${darkColor})` : `rgb(${ligthColor})`}
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
                        stroke: lineGraphColor
                    }
                }
            }}
        />
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