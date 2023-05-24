import React from 'react'
import IconImg1 from '../../assets/placeholders/b.png'
import IconImg2 from '../../assets/placeholders/dg.png'
import IconImg3 from '../../assets/placeholders/g1.png'
import IconImg4 from '../../assets/placeholders/lv.png'
import IconImg5 from '../../assets/placeholders/v.png'



const SmallIcons = () => {
  return (
    <div className="icon_container">
      <div className="icon_box">
        <img src={IconImg1} alt="" />
        <img src={IconImg2} alt="" />
        <img src={IconImg4} alt="" />
        <img src={IconImg3} alt="" />
        <img src={IconImg5} alt="" />
      </div>
    </div>
  )
}

export default SmallIcons