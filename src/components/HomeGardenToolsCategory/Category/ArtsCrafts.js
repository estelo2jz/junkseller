import React from 'react';
import { Link } from 'react-router-dom';
import '../HomeGardenStyles/ArtsCrafts.scss';
import Building from '../../Building'; 
import JumpTo from './JumpTo';

function ArtsCrafts() {
  return (
    <div className="arts-crafts__container">
      <JumpTo 
          path1 = "/home&garden&tools/discover"
          link1 = "discover"
          path2 = "/home&garden&tools/petsupplies"
          link2 = "pet-supplies"
          path3 = "/home&garden&tools/collective&fineart"
          link3 = "collective&fine-art"
          path4 = "/home&garden&tools/exploreshowroom"
          link4 = "explore-showroom"
          path5 = "/home&garden&tools/fineart"
          link5 = "fine-art"
          path6 = "/home&garden&tools/bed&bath"
          link6 = "bed&bath"
          path7 = "/home&garden&tools/shoproom"
          link7 = "shop-room"
          path8 = "/home&garden&tools/kitchen&dining"
          link8 = "kitchen&dining"
          path9 = "/home&garden&tools/mattresses"
          link9 = "mattresses"
          path10 = "/home&garden&tools/home"
          link10 = "home"
          path11 = "/home&garden&tools/storage&organization"
          link11 = "storage&organization"
          path12 = "/home&garden&tools/garden&outdoor"
          link12 = "garden&outdoor"
          path13 = "/home&garden&tools/appliances"
          link13 = "appliances"
          path14 = "/home&garden&tools/furniture"
          link14 = "furniture"
          path15 = "/home&garden&tools/homedecor"
          link15 = "home-decor"
          path16 = "/home&garden&tools/events&partysupplies"
          link16 = "events&party-supplies"
          path17 = "/home&garden&tools/lighting"
          link17 = "lighting"
        />
      <div className="arts-crafts__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/home&garden&tools">
          <p>
            /home&garden&tools
          </p>
        </Link>
        <p>/artscrafts&sewing</p>
      </div>
      <Building />
    </div>
  )
}

export default ArtsCrafts
