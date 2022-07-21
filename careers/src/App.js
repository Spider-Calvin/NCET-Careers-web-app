import './App.css';
import Home from "./components/home/home";
import {Routes , Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/footer';
import Jobs from './components/jobs/jobs'
import Scroll from './components/scroll';
import Dept from './components/dept/dept';
import Job_des from './components/job_des/job_des';
import Form from './components/Form/Form';
import SanityDeleting from './components/SanityWork/sanityDeleting';

function App() {
  return (
    <>
      <Navbar />
      <Scroll />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="apply" element={<Jobs />}>
          <Route path="" element={<Dept />} />
          <Route path="job_des" element={<Job_des />} />
        </Route>
        <Route path="form" element={<Form />} />
      </Routes>
      <SanityDeleting/>
      <Footer />
    </>
  );
}

export default App;
