import React from 'react'
import './dept.scss'
import cse from "../../Images/computerScience.jpg";
import da from "../../Images/da.jpg";
import as from "../../Images/as.jpg";
import chem from "../../Images/chem.jpg";
import civil from "../../Images/civil.jpg";
import cons from "../../Images/cons.jpg";
import ec from "../../Images/ec.jpg";
import info from "../../Images/info.jpg";
import is from "../../Images/is.jpg";
import math from "../../Images/math.jpg";
import mba from "../../Images/mba.jpg";
import phy from "../../Images/phy.jpg";
import soc from "../../Images/soc.jpg";
import stru from "../../Images/stru.jpg";
import { motion } from "framer-motion";

function dept() {
  return (
    <div>
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.3 }}
        className={`app__flex`}
      >
        <h2 className="section__title">UNDERGRADUATE</h2>
        <span className="section__subtitle">Departments in Undergraduate</span>

        <div className="services_container container grid">
          <div className="services_content">
            <div>
              <img className="dep_img" src={cse} alt="" />
            </div>
            <div className=" services_button">
              COMPUTER SCIENCE ENGINEERING
              <i className=""></i>
            </div>{" "}
            <br />
            <a className="website_visit" href="#">
              <i className=""> </i> Know more
            </a>
          </div>

          <div className="services_content">
            <div>
              <img className="dep_img" src={civil} alt="" />
            </div>
            <div className=" services_button">
              CIVIL ENGINEERING
              <i className=""></i>
            </div>{" "}
            <br />
            <br />
            <a className="website_visit" href="#">
              <i className=""> </i> Know more
            </a>
          </div>

          <div className="services_content">
            <div>
              <img className="dep_img" src={ec} alt="" />
            </div>
            <div className=" services_button">
              ELECTRONICS & COMMUNICAATION ENGINEERING
              <i className=""></i>
            </div>{" "}
            <br />
            <a className="website_visit" href="#">
              <i className=""> </i> Know more
            </a>
          </div>

          <div className="services_content">
            <div>
              <img className="dep_img" src={is} alt="" />
            </div>
            <div className=" services_button">
              INFORMATION SCIENCE ENGINEERING
              <i className=""></i>
            </div>{" "}
            <br />
            <a className="website_visit" href="#">
              <i className=""> </i> Know more
            </a>
          </div>

          <div className="services_content">
            <div>
              <img className="dep_img" src={da} alt="" />
            </div>
            <div className=" services_button">
            DATA SCIENCE ENGINEERING
              <i className=""></i>
            </div>{" "}
            <br />
            <br />
            <a className="website_visit" href="#">
              <i className=""> </i> Know more
            </a>
          </div>

          <div className="services_content">
            <div>
              <img className="dep_img" src={as} alt="" />
            </div>
            <div className=" services_button">
            ARTIFICIAL INTELIGENCE & MACHINE LEARNING ENGINEERING
              <i className=""></i>
            </div>{" "}
            <br />
            <a className="website_visit" href="#">
              <i className=""> </i> Know more
            </a>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.3 }}
        className={`app__flex`}
      >
        <h2 className="section__title">POST UNDERGRADUATE</h2>
        <span className="section__subtitle">Departments in post graduate</span>

        <div className="services_container container grid">
          <div className="services_content">
            <div>
              <img className="dep_img" src={mba} alt="" />
            </div>
            <div className=" services_button">
              MBA
              <i className=""></i>
            </div>{" "}
            <br />
            <a className="website_visit" href="#">
              <i className=""> </i> Know more
            </a>
          </div>

          <div className="services_content">
            <div>
              <img className="dep_img" src={cons} alt="" />
            </div>
            <div className=" services_button">
              M-TECH CONSTRUCTIONAL
              <i className=""></i>
            </div>{" "}
            <br />
            <a className="website_visit" href="#">
              <i className=""> </i> Know more
            </a>
          </div>

          <div className="services_content">
            <div>
              <img className="dep_img" src={stru} alt="" />
            </div>
            <div className=" services_button">
              M-TECH STRUCTURAL
              <i className=""></i>
            </div>{" "}
            <br />
            <a className="website_visit" href="#">
              <i className=""> </i> Know more
            </a>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.3 }}
        className={`app__flex`}
      >
        <h2 className="section__title">BASIC SCIENCES</h2>
        <span className="section__subtitle">Departments in basic sciences</span>

        <div className="services_container container grid">
          <div className="services_content">
            <div>
              <img className="dep_img" src={math} alt="" />
            </div>
            <div className=" services_button">
              MATHEMATICS
              <i className=""></i>
            </div>{" "}
            <br />
            <a className="website_visit" href="#">
              <i className=""> </i> Know more
            </a>
          </div>

          <div className="services_content">
            <div>
              <img className="dep_img" src={phy} alt="" />
            </div>
            <div className=" services_button">
              PHYSICS
              <i className=""></i>
            </div>{" "}
            <br />
            <a className="website_visit" href="#">
              <i className=""> </i> Know more
            </a>
          </div>
          <div className="services_content">
            <div>
              <img className="dep_img" src={chem} alt="" />
            </div>
            <div className=" services_button">
              CHEMISTRY
              <i className=""></i>
            </div>{" "}
            <br />
            <a className="website_visit" href="#">
              <i className=""> </i> Know more
            </a>
          </div>

          <div className="services_content">
            <div>
              <img className="dep_img" src={soc} alt="" />
            </div>
            <div className=" services_button">
              SOCIAL SCIENCE & FOREIGN LANGUAGES
              <i className=""></i>
            </div>{" "}
            <br />
            <a className="website_visit" href="#">
              <i className=""> </i> Know more
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default dept
