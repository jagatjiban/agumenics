import React from 'react'
import './index.css';
import{MdOutlinePets} from 'react-icons/md'
import { useState } from 'react';
import { useEffect } from 'react';
import { urlFor,client } from '../../client';

const Navbar = () => {
  // const [datas,setDatas]= useState();

  // useEffect(async ()=>{
  //   const query='*[_type == "petcareapp"]'
  //   await client.fetch(query)
  //   .then((data)=> setDatas(data))
  // },[]);
  // console.log(datas)

  return (
    <div className='navbar_container'>
      <div className="logo">
        <h1 className='petlogo'><MdOutlinePets/></h1>
      <h1>PetCare</h1>
      </div>
      <div className="links">
          <a href="">Home</a>
          <a href="">Aboutus</a>
          <a href="">Services</a>
          <a href="">pet Health</a>
          <a href="">Contact us</a>
      </div>
      <div className='reg_button'>
        <button>Register</button>
      </div>
    </div>
  )
}

export default Navbar
