import React from 'react'

const page = () => {
    const name="Nabin Karki";
    const age="23";
    const obj={name:"hari"};
    const link = "https://www.google.com";
  return (
    <div>
        <div className="div-content">
            <h2>{name}</h2>
            <h2>{age}</h2>
            <h2>{obj.name}</h2>
            <h3>{20}</h3>
            <a href={link}>Google</a>
        </div>
    </div>
  )
}

export default page
