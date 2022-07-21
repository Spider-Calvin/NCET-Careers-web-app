// Navbar.js
import React, {useState , useEffect} from "react";
import './Navbar.scss'
import navimg from "../../Images/nav_logo_img.png";
import navimg1 from "../../Images/nav_logo_img1.png";

import navimg3 from "../../Images/ncetLogo.png"
import { FiAlignRight, FiX, FiChevronDown } from "react-icons/fi";


const Navbar = () => {

    const [isActive, setIsActive] = useState(false);
   

      const handleClick = (event) => {
        // 👇️ toggle isActive state on click
        setIsActive((current) => !current);
      };

      

  return (
    <>
      <div className="calvin">
        <a href="#" className="calvin__logo">
          NCET
        </a>

        <i className="calvin__toggle" id="calvin-toggle" onClick={handleClick}>
          {isActive ? <FiX /> : <FiAlignRight />}
        </i>

        <div className={isActive ? "spider show" : "spider"} id="spider-menu">
          <div className="spider__content spider-grid">
            <div href="" className="spider__perfil">
              <div className="spider__img">
                <img className="navimg-dis" src={navimg3} alt="" />
                <img className="navimg-dis2"  src={navimg1} alt="" />
              </div>
            </div>

            <div className="spider__menu">
              <ul className="spider__list">
                <li className="spider__item">
                  <a
                    target="_blank"
                    href="http://www.ncet.co.in/admissions.html"
                    className="spider__link"
                  >
                    ADMISSIONS
                  </a>
                </li>

                <li className="spider__item">
                  <a
                    target="_blank"
                    href="http://www.ncet.co.in/r_d.html"
                    className="spider__link"
                  >
                    PLACEMENTS
                  </a>
                </li>

                <li className="spider__item">
                  <a href="#" className="spider__link">
                    RESEARCH
                  </a>
                </li>

                <li className="spider__item">
                  <a href="#" className="spider__link">
                    DEPARTMENTS
                  </a>
                </li>

                <li className="spider__item">
                  <a href="#" className="spider__link">
                    GALLERY
                  </a>
                </li>
                <li className="spider__item">
                  <a href="#" className="spider__link">
                    CONTACT
                  </a>
                </li>

                <li className="spider__item2 arya">
                  <a href="#" className="spider__link1 arya__link">
                    ABOUT US
                    <i className="bx arya__icon">
                      {" "}
                      <FiChevronDown />
                    </i>
                  </a>

                  <ul className="arya__menu">
                    <li className="arya__item">
                      <a href="#" className="spider__link1">
                        About NES
                      </a>
                    </li>
                    <li className="arya__item">
                      <a href="#" className="spider__link1">
                        {" "}
                        Chairman's Message
                      </a>
                    </li>
                    <li className="arya__item">
                      <a href="#" className="spider__link1">
                        {" "}
                        Principal's Message
                      </a>
                    </li>
                    <li className="arya__item">
                      <a href="#" className="spider__link1">
                        {" "}
                        Governing Message
                      </a>
                    </li>
                    <li className="arya__item">
                      <a href="#" className="spider__link1">
                        {" "}
                        Academic Council
                      </a>
                    </li>
                    <li className="arya__item">
                      <a href="#" className="spider__link1">
                        {" "}
                        Chairman's Message
                      </a>
                    </li>
                    <li className="arya__item">
                      <a href="#" className="spider__link1">
                        {" "}
                        Accredations and Affiliations
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="spider__item2 arya">
                  <a href="#" className="spider__link1 arya__link">
                    EXAMINATIONS{" "}
                    <i className="bx arya__icon">
                      {" "}
                      <FiChevronDown />
                    </i>
                  </a>
                  <ul className="arya__menu">
                    <li className="arya__item">
                      <a href="#" className="spider__link">
                        Results
                      </a>
                    </li>
                    <li className="arya__item">
                      <a href="#" className="spider__link">
                        Parents Login
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="spider__item2">
                  <a href="#" className="spider__link1">
                    I4 CELL
                  </a>
                </li>

                <li className="spider__item2">
                  <a href="#" className="spider__link1">
                    ED CELL
                  </a>
                </li>

                <li className="spider__item2">
                  <a href="#" className="spider__link1">
                    ALUMNI
                  </a>
                </li>

                <li className="spider__item2">
                  <a href="#" className="spider__link1">
                    IAQC
                  </a>
                </li>

                <li className="spider__item2">
                  <a href="#" className="spider__link1">
                    CLUBS
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="spider__content spider__content2 spider-grid  spider_disappear">
            <a href="" className="spider__perfil"></a>

            <div className="spider__menu spider_menu2">
              <ul className="spider__list">
                <li className="spider__item1 arya">
                  <a href="#" className="spider__link1 arya__link">
                    ABOUT US
                    <i className="bx arya__icon">
                      <FiChevronDown />
                    </i>
                  </a>

                  <ul className="arya__menu">
                    <li className="arya__item">
                      <a href="#" className="spider__link1">
                        About NES
                      </a>
                    </li>
                    <li className="arya__item">
                      <a href="#" className="spider__link1">
                        {" "}
                        Chairman's Message
                      </a>
                    </li>
                    <li className="arya__item">
                      <a href="#" className="spider__link1">
                        {" "}
                        Principal's Message
                      </a>
                    </li>
                    <li className="arya__item">
                      <a href="#" className="spider__link1">
                        {" "}
                        Governing Message
                      </a>
                    </li>
                    <li className="arya__item">
                      <a href="#" className="spider__link1">
                        {" "}
                        Academic Council
                      </a>
                    </li>
                    <li className="arya__item">
                      <a href="#" className="spider__link1">
                        {" "}
                        Chairman's Message
                      </a>
                    </li>
                    <li className="arya__item">
                      <a href="#" className="spider__link1">
                        {" "}
                        Accredations and Affiliations
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="spider__item1 arya">
                  <a href="#" className="spider__link1 arya__link">
                    EXAMINATIONS
                    <i className="bx  arya__icon">
                      <FiChevronDown />
                    </i>
                  </a>
                  <ul className="arya__menu">
                    <li className="arya__item">
                      <a href="#" className="spider__link">
                        Results
                      </a>
                    </li>
                    <li className="arya__item">
                      <a href="#" className="spider__link">
                        Parents Login
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="spider__item1">
                  <a href="#" className="spider__link1">
                    <span> I4_CELL </span>
                  </a>
                </li>

                <li className="spider__item1">
                  <a href="#" className="spider__link1">
                    ED_CELL
                  </a>
                </li>

                <li className="spider__item1">
                  <a href="#" className="spider__link1">
                    ALUMNI
                  </a>
                </li>

                <li className="spider__item1">
                  <a href="#" className="spider__link1">
                    IAQC
                  </a>
                </li>

                <li className="spider__item1">
                  <a href="#" className="spider__link1">
                    CLUBS
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="orange_link"></div>
    </>
  );
};
export default Navbar;
