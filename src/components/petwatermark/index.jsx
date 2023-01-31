import React from 'react'
import { MdOutlinePets } from "react-icons/md";

const PetWatermark = () => {
  return (
    <div>
      <div className="pet_watermark" style={{ top: "15rem", right: "10rem" }}>
        <MdOutlinePets />
      </div>
      <div
        className="pet_watermark"
        style={{ top: "30rem", right: "12rem", transform: "rotate(-40deg)" }}
      >
        <MdOutlinePets />
      </div>
      <div
        className="pet_watermark"
        style={{ top: "7rem", left: "40%", transform: "rotate(40deg)" }}
      >
        <MdOutlinePets />
      </div>
      <div
        className="pet_watermark"
        style={{ top: "50%", left: "35%", transform: "rotate(-90deg)" }}
      >
        <MdOutlinePets />
      </div>
      <div
        className="pet_watermark"
        style={{ top: "50%", left: "5%", transform: "rotate(-40deg)" }}
      >
        <MdOutlinePets />
      </div>
    </div>
  )
}

export default PetWatermark
