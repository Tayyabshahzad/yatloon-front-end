
import OfferCard from "../../components/offer_cards";
import HeroSlideshow from "./slideshow_hero";
import CourseCard from "../../components/course_card";
import Testimonials from "./tetimonials";
import VideoPlayer from "./video_players";
import Animation from "./animation";
import offersBg from "../../assets/images/offers.jpeg";
import slide1 from "../../assets/images/slide_1.jpeg"
import CertificateCarousel from "./certificateCarousel";
import TeamComponent from "./teamComponent";

import React, { useEffect, useState } from 'react';
import axios from 'axios';

import testimonialsBg from "../../assets/images/AboutUsBanner.jpg"
import aboutUsBg from "../../assets/images/about_us_1.jpeg"
import videoBg from "../../assets/images/video_bg.png";
import pointsBg from "../../assets/images/points_bg.jpeg";
import certBg from "../../assets/images/cert_frame.jpeg"; 
import config from '../../constants';
export default function HomePage(props) {



  const [courseContents, setCourseContents] = useState([]);
  useEffect(() => {
    const fetchCourses = async () => {
      try { 
        
        const response = await axios.get(`${config.REACT_APP_API_BASE_URL}courses`);
        
        setCourseContents(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);


 


  return (
    <div className={` min-h-full`}>
      <section className="">
        <HeroSlideshow />
      </section>
      <section className="flex flex-col items-center p-1">
        <h2 className={`cinzel font-[700] text-gray-800 text-[32px] my-5`}>Featured Courses</h2>
        <div className="sm:grid grid-rows-3 grid-cols-[repeat(3,_minmax(0,_300px))]">
          {
          courseContents.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))
          }
        </div>
      </section>
      <section style={{ backgroundImage: `url(${aboutUsBg})`, minHeight: '500px' }} className="bg-cover bg-center w-full flex ">
        <div className="w-full my-[40px] mx-auto">
          <h2 className={`cinzel text-royal text-[30px] font-[700] mb-[30px] text-center`}>Our Testimonials</h2>
          <Testimonials />
        </div>
        <div className="max-sm:hidden">
        </div>
      </section>

      <section className="w-full flex relative">
  <div className="w-full my-[40px] mx-auto">
    <h2 className="cinzel text-royal text-[30px] font-[700] mb-[30px] text-center">Our Team</h2>
    <TeamComponent  />
  </div>
 
</section>



      <section
  style={{ backgroundImage: `url(${testimonialsBg})` ,    height: '600px' 
}}
  className="bg-no-repeat bg-[length:100%_100%] text-white " // or any desired height
>
  <div className="bg-[rgba(0,0,0,0.3)] max-sm:px-8 max-sm:py-16 px-16 py-48 flex items-center h-full">
    <div className="max-md:max-w-[90%] max-w-[40%]">
      {/* Content goes here */}
    </div>
  </div>
</section>


      <section style={{ backgroundImage: `url(${videoBg})` }} className="contrast  bg-[length:100%_100%] p-24 max-sm:p-16 flex justify-center items-center flex-col text-white">
        <div className="flex flex-col items-center mt-8">
          <h2 className={`cinzel text-[30px] font-[700] mb-[10px]`}>Our Video Introduction</h2>
          <p className="text-sm"><span className="font-bold">YATLOON QURAN ACADEMY</span> is committed to teach non-Arabic students from the basic level to advance.</p>
        </div>
        <div className="sm:mt-24 mt-8 w-[50vw] max-sm:w-[80vw] aspect-video">
          <VideoPlayer />
        </div>
      </section>
      <section className="bg-gradient-to-r from-amber-200 to-teal-600 pt-16 opacity-90">
        <h2 className={`cinzel text-white text-center text-[30px] font-[700] mb-[30px]`}>Our Values</h2>
        <div className="flex flex-col gap-8 md:grid grid-cols-3 gap-6 p-16 max-md:px-6">
          <div style={{ backgroundImage: `url(${pointsBg})` }} className="border-royal border-4 rounded-2xl bg-[length:100%_100%] w-full min-h-[500px] flex items-center justify-center">
            <div className="flex flex-col items-center mt-4">
              <h4 className={`cinzel w-[50%] text-center text-gray-900 text-xl`}>
                About Us
              </h4>
              <ul className="text-xs text-center w-[80%] font-bold border-royal  p-4 items-center text-gray-900 mt-16 mb-[-150px] flex flex-col gap-4 ">
                <li>Established For Spreading Quran</li>
                <li>Supervised By Qualified Teachers</li>
                <li>Redistered Organization in Pakistan</li>
                <li>Connects students and teachers globally</li>
              </ul>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${pointsBg})` }} className="border-royal border-4 rounded-2xl  bg-[length:100%_100%] w-full min-h-[500px] flex items-center justify-center">
            <div className="flex flex-col items-center mt-4">
              <h4 className={`cinzel w-[50%] text-center text-gray-900 text-xl`}>
                Mission And Vision
              </h4>
              <ul className="text-xs text-center w-[80%] font-bold border-royal  p-4 items-center text-gray-900 mt-16 mb-[-150px] flex flex-col gap-4 ">
                <li>Rooted by well-qualified Islamic Scholars</li>
                <li>Aim to attain blessings and reward from Allah Almighty</li>
                <li>Teach Quran, Arabic Language, and Sunnah</li>
                <li>Focus on Muslims in non-Muslim countries</li>
              </ul>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${pointsBg})` }} className="border-royal border-4 rounded-2xl  bg-[length:100%_100%] w-full min-h-[500px] flex items-center justify-center">
            <div className="flex flex-col items-center mt-4">
              <h4 className={`cinzel w-[50%] text-center text-gray-900 text-xl`}>
                Aims And Objectives
              </h4>
              <ul className="text-xs text-center w-[80%] font-bold border-royal  p-4 items-center text-gray-900 mt-16 mb-[-150px] flex flex-col gap-4 ">
                <li>Develop love for Allah and His words</li>
                <li>Lock Quran in the hearts of Muslims</li>
                <li>Sadaqah Jariyah for learning Quran</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section style={{ backgroundImage: `url(${certBg})` }} className="p-3 contrast flex h-[100vh] text-white bg-cover bg-no-repeat bg-center flex items-center justify-center">
        <CertificateCarousel />
      </section>
    </div>
  )
}