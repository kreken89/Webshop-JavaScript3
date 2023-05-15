import React from 'react'

const SmallHero = (props) => {
  return (
    <>
    <div className="smallHero">
      <h1 >{props.page}</h1>
      <h2 >{props.description}</h2>
    </div>
    </>
  )
}

export default SmallHero