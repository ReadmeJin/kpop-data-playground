import React, { forwardRef, LegacyRef } from 'react'

interface YoutubeStatsProps {
}
export const YoutubeStats = forwardRef((props, ref: LegacyRef<HTMLDivElement>) => {
    return (
        <div ref={ref} id="youtube-counts-section" className="p-20 h-screen mt-52">
            Youtube
        </div>
    )
})

export default YoutubeStats;
