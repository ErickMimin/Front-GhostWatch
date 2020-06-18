import React from 'react';
import {useRef, useState} from 'react';

const StarRating: React.FC<{rating: any}> = ({rating}) => {
    const [stars, setStars] = useState(['', '', '', '', ''].map(()=>{return 'star_border'}));
    const parent = useRef<HTMLDivElement>(null);
    const handleClick = (id: number) => {
        rating(id + 1);
        setStars(stars.map((x, i) => {
            if(i <= id)
                return "star";
            else
                return "star_border";
        }));
    };



  return (
    <div ref={parent}>
        <span role="button"  onClick={()=>{handleClick(0)}} className='material-icons'>{stars[0]}</span>
        <span role="button"  onClick={()=>{handleClick(1)}} className='material-icons'>{stars[1]}</span>
        <span role="button"  onClick={()=>{handleClick(2)}} className='material-icons'>{stars[2]}</span>
        <span role="button"  onClick={()=>{handleClick(3)}} className='material-icons'>{stars[3]}</span>
        <span role="button"  onClick={()=>{handleClick(4)}} className='material-icons'>{stars[4]}</span>
    </div>
  ); 
}

export default StarRating;