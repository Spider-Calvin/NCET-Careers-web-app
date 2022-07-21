import React from 'react'
import {
  AiOutlineTrademarkCircle,
  AiOutlineCopyright,
  SiXdadevelopers,
} from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import './footer.scss'

function footer() {
  return (
    <div>
      <div className="footer">
        <div className="link">
          <p>NCET</p>
          <p>
            <AiOutlineCopyright/> All Rights Reserved
          </p>
        </div>
        <div className="link_imp">
          <a href="https://calvin-das.web.app" target="blank">
            <MdDeveloperMode /> Developed by Spider-Calvin
          </a>
        </div>
      </div>
    </div>
  );
}

export default footer
