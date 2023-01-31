import React, { useState , useEffect} from 'react'
import './index.css';
import{MdOutlinePets} from 'react-icons/md'
import { Link } from "react-router-dom";
import { client } from '../../client';

const Navbar = () => {
  const [datas , setDatas]=useState([]);
  const [isLoading , setIsLoading]=useState(false);

  useEffect(()=>{
    client.fetch(`*[_type == "petcare"]`).then((data)=> {
      setDatas(data)
      setIsLoading(true);
    })
      .catch(console.error);
  },[]);
  console.log(datas);
  return (
    isLoading && 
    <div className='navbar_container'>
      <div className="logo">
        <h1 className='petlogo'><MdOutlinePets/></h1>
      <h1>{datas[0].website_name}</h1>
      </div>
      <div className="links">
          <Link to="/">Home</Link>
          <Link to="/">Aboutus</Link>
          <Link to="/">Services</Link>
          <Link to="/">pet Health</Link>
          <Link to="/contact">Contact us</Link>
      </div>
      <div className='reg_button'>
      <a href="https://petcaredashboard.sanity.studio/" target="_blank">
        <button>Register</button>
      </a>
      </div>
    </div>
  )
}

export default Navbar
