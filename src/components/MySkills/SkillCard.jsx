import Image from 'next/image'
import React from 'react'

export default function SkillCard({ skillTitle, skillIcon }) {

  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };
  
  return (
    <div className='skillContainer'>
        <Image
            loader={myLoader} 
            src={`${skillIcon}`}
            width={64}
            height={57}
            alt="Skill Icon"
        />
        <h4>{skillTitle}</h4>
    </div>
  )
}
