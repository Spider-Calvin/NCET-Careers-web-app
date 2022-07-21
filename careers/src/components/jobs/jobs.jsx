import React from "react";
import "./jobs.scss";
import { Routes, Route, NavLink, Outlet } from "react-router-dom";
import { useState , useEffect } from "react";
import { motion } from "framer-motion";

function Jobs() {
   const [active , setActive] = useState(true);
    const dept = () => {
      setActive(true);
    };

     const job_des = () => {
       setActive(false);
     };

  return (
    <>
      <div className="jobs_container">
        <div className="routed">
          <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.6 }}
            className={`app__flex`}
          >
            <div className="banner">
              <NavLink to="/apply">
                <div
                  className={active ? "banner_btn" : "banner_btn_cl"}
                  onClick={dept}
                >
                  DEPARTMENTS IN NCET
                </div>
              </NavLink>
              <NavLink to="/apply/job_des">
                <div
                  className={active ? "banner_btn_cl" : "banner_btn"}
                  onClick={job_des}
                >
                 ELIGIBILITY AND CRITERIA  
                </div>
              </NavLink>
            </div>
          </motion.div>
          <Outlet />
        </div>
        <div className="line_btw"></div>

        <div className="apply_links">
          <motion.div
            whileInView={{ x: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__header-info"
          >
            <div className="apply_container">
              <div className="apply_tittle">
                Invites applications from candidates with High Academic &
                Research Achievements for the following positions:  <br /> PROFESSOR <br />
                ASSOC. PROF <br /> ASST. PROF <br /> For the Departments of <br /> Civil Engg, ECE,
                CSE, ISE, CSE (Date Science), CSE (AI&ML), MBA, Physics,
                Chemistry, Mathematics, English and Kannada. <br /> <br />Also for <br /> Dean Academics, IT
                infrastructure Head, Admission Head, Marketing Executives &
                Placement Officer
              </div>
              <NavLink to="/form">
                <div className="apply1 hod">CLCK HERE TO APPLY</div>
              </NavLink>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Jobs;
