import React from 'react'
import Masonry from "react-masonry-css";
import Pin from './Pin';

const breakpoints = {
    default: 4,
    3000: 6,
    2000: 5,
    1200: 3,
    1000: 2,
    500: 1
}
function MansoryLayout({ pins }) {
    return (
        <Masonry breakpointCols={breakpoints} className="flex animate-slide-fwd" >
            {pins?.map((item) => <Pin key={item._id} pin={item} className="w-max" />)}
        </Masonry>
    )
}

export default MansoryLayout