import React, { useMemo } from 'react';
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Rating({count,rating,color,onRating}:any) {
    const starRating = useMemo(()=>{
        return Array(count)
            .fill(0)
            .map((_,i)=>i+1)
            .map(idx => {
                <FontAwesomeIcon
                    key={idx}
                    className="cursor-pointer"
                    icon="star"
                    onClick={()=>onRating(idx)}
                />
            })
    },[count,rating])

  return (
    <div>
        {/* {starRating} */}
    </div>
  )
}

Rating.propTypes ={
    count:PropTypes.number,
    rating:PropTypes.number,
    onChange:PropTypes.func,
    color:{
        filled : PropTypes.string,
        unfilled : PropTypes.string,
    }
}

Rating.defaultProps={
    count: 5,
    rating: 0,
    color: {
        filled : '#FFFF00',
        unfilled : '#DFDFDF'
    }
}

export default Rating