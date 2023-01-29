import React, { useEffect, useState } from 'react'
import './index.css'
import {FaCat} from 'react-icons/fa';
import{BsArrowUpRight , BsStarFill} from 'react-icons/bs';
import{MdNavigateBefore ,MdNavigateNext} from 'react-icons/md';
import{MdOutlinePets} from 'react-icons/md'
import petImage from '../../assets/pet_women.jpg';
import p1 from '../../assets/p1.jfif';
import p2 from '../../assets/p2.jfif';
import p3 from '../../assets/p3.jfif';
import p4 from '../../assets/p4.jfif';
import p5 from '../../assets/p5.jfif';
import pr from '../../assets/pr.jpg'
import dog1 from '../../assets/dog1.png'
import dog2 from '../../assets/dog2.png'
import dog3 from '../../assets/dog3.png'
import { client } from '../../client';

const Home = () => {
//     const [datas,setDatas]= useState();

//   useEffect(async ()=>{
//     const query='*[_type == "petcareapp"]'
//     await client.fetch(query)
//     .then((data)=> setDatas(data))
//   },[]);
//   console.log(datas)
  return (
    <>
    <div className='home_container'>
      <div className="description">
        <p1>Your pet</p1> <p4><FaCat/></p4><br />
        <p2>Our Services</p2><br /><br />
        <p3>Before you home pet, be sure you are <br/> to take care of it properly</p3>
        <div className='buttons'>
            <button className='ser_btn'>Our services</button>
            <a href="*">Create Schedule</a>
        </div>
        <div className="review_container">
            <div>
                <div className='yellow_box'></div>
                    <div className="profile_container">
                        <img src={p1} alt="p1" />
                        <img src={p2} alt="p2" />
                        <img src={p3} alt="p3" />
                            <img src={p4} alt="p4" />
                    <img src={p5} alt="p5" />
                </div>
            </div>
            <div className="review_value">
                <h1 className='rev_val'>12K +</h1>
                <p5>See user rating of us to see <br/>the quality we provide.</p5>
            </div>
        </div>
      </div>
      <div className='img_container'>
        <img src={petImage} alt="image" />
      </div>
    </div>
      <div className='footer'>
        <div className='review_box_container'>
            <div className='profile_img'>
                <img src={pr} alt="profile" />
            </div>
            <div className='review_val'>4.5 <BsStarFill/></div>
            <div className="rev_box">
                <p6>Jagat Jiban</p6><br />
                <p7>jagatjiban@gmail.com</p7>
            </div>
            <div className="rev_button">
                <div className="see_rev">See Review</div>
                <div className="arrow"><BsArrowUpRight/></div>
            </div>
        </div>
        <div className="learn_container">
            <div className="blue_box">
                <div className="before"><MdNavigateBefore/></div>
                <div className="dogs">
                    <div className="dog1">
                        <div className="dog1_img"><img src={dog1} alt="dog1" /></div>
                        <div className='dog1_desc'>Super dog <br /><br/><span>see more</span></div>
                    </div>
                    <div className="dog2">
                        <div className="dog2_img"><img src={dog2} alt="dog2" /></div>
                        <div className='dog2_desc'>cute dog <br /><br /><span>see more</span></div>
                    </div>
                    <div className="dog3">
                        <div className="dog3_img"><img src={dog3} alt="dog3" /></div>
                        <div className='dog3_desc'>Sweet dog <br /><br /><span>see more</span></div>
                    </div>
                </div>
                <div className="after"><MdNavigateNext/></div>
            </div>
            <div className="black_box">
                <div className='footer_logo'>
                    <h1 className="f_lg"><MdOutlinePets/></h1>
                    <h1>PetCare</h1>
                </div>
                <div className='footer_desc'>Learn how to take care of your <br /> pet with proper guidance</div>
            </div>
        </div>
      </div>

    </>
  )
}

export default Home
