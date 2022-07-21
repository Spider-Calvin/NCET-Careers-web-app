import React , {useState ,useEffect} from 'react'
import './home.scss'
import info_img from '../../Images/info.jpg'
import { FiChevronsRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom';


import { urlFor, client } from "../../client";

const Home = () => {
  const [active, setActive] = useState(100);
 
   const knowmore = (index) => {
     // 👇️ toggle isActive state on click
  
     console.log(index)
     setActive(index)
    
   };
  
   const [jobs, setJobs] = useState([]);

   useEffect(() => {
     const query = '*[_type == "current_jobs"]';

     client.fetch(query).then((data) => {
       setJobs(data);
     });
   }, []);



  return (
    <div className="home">
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.7 }}
        className={`app__flex`}
      >
        <div className="naac">NAAC A+ Grade</div>
        <div className="tittle">CAREERS</div>

        <div className="info">
          <div className="info_img">
            <img src={info_img} alt="" />
          </div>
          <div className="info_desc">
            <div>
              A career at Nagarjuna Engineering College is always inspiring. You
              will be in the institution of an aspiring young team of faculty
              members and staff. The Management is always supportive in all
              endeavors. The infrastructure facilities for teaching and research
              are conducive to excellence.
              <br />
              <br />
               NCET has well devised HR policies
              which will ensure recognition and rewards for excellent
              performers. At NCET, we provide you with every possible
              opportunity to inspire and help you traverse beyond what you think
              might be possible. At NCET, growth is vertical, lateral,
              incremental and exponential. We are serious about your growth.
              Come and join the NCET family.
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="apply">
          <NavLink to="/apply">
            <div className="apply_btn">
              FACULTY HIRING CALL - APPLY! {"  "}
              <FiChevronsRight />
            </div>
          </NavLink>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className={` app__flex`}
      >
        <div className="cur_op">
          <div className="cur_tittle">CURRENT OPENINGS</div>
          <div className="cur_jobs">
            <ul>
              {jobs.map((job, index) => (
                <li key={job + index}>
                  <h4 style={{ margin: 0, padding: 0 }}>{job.position_name}</h4>
                  <p style={{ margin: 0 }}>{job.short_description} </p>
                  <div>{active == index ? job.Complete_description : ""}</div>
                  <button onClick={() => knowmore(index)}>
                    Know More
                  </button>{" "}
                  <NavLink to="/apply">
                    <button>Apply for this</button>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Home
