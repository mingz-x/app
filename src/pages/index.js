import React, { useEffect } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import axios from 'axios';
import Link from 'next/link';
import useStore from '@/state/store';
import { getData } from '@/utils/apiFun';

const Home = ({openApi}) => {
  const {dataSave,data} = useStore()

  useEffect(()=>{
    dataSave(openApi);
  },[]);

  console.log(data)


  const dp_day = openApi.exhibition.filter((day) => new Date(day.DP_END) > new Date())

  // const dp_day = (ex)=>{
  //     // end = new Date(data.exhibition[0].DP_END);
  //     // today = new Date();
  //     // end > today
  //     return ex.filter(
        
  //     )

  //     {/*
  //       const multipleSearch = (array) => {
  //         return array.filter(
  //           (el) => 
  //           Object.keys(el).some((parameter) => 
  //             el[parameter].toString().toLowerCase().includes(query)
  //           )
  //         )
  //       }
  //     */}
  //     {/*
  //       //Function for multiple search filter
  //       const multipleSearch = (array) => {
  //         return array.filter(
  //           (el) => 
  //           el.region.includes(continentToSort) &&
  //           Object.keys(el).some((parameter) => 
  //             el[parameter].toString().toLowerCase().includes(query)
  //           )
  //         )
  //       }
  //     */}
  //     {/*
  //       const filteredUsers = useMemo(() => {
  //         return users.filter(user => user.name.toLowerCase().includes(filterValue.toLowerCase()));
  //       }, [users, filterValue]);
  //     */}
  // }

  console.log(dp_day);


  return (
    <div className="art">
      <div className="home">
        <h2>
          서울시립미술관 <br/>
          SEOUL MUSEUM OF ART
        </h2>
        <Swiper 
          autoplay={{delay: 2500, disableOnInteraction: false,}} 
          loop={true} 
          navigation={true} 
          modules={[Autoplay, Navigation]} 
          className="mySwiper">
            {/* <SwiperSlide>
              <div className='main'>
                <figure><img src={dp_day[1].DP_MAIN_IMG}/></figure>
                <p>{dp_day[1].DP_NAME}</p>
              </div>
            </SwiperSlide> */}
            {
              dp_day.map((dp,n)=>
                (n<5) ? (
                  <SwiperSlide key={dp.id}>
                    <div className='main'>
                      <figure><img src={dp.DP_MAIN_IMG}/></figure>
                      <p>{dp.DP_NAME}</p>
                    </div>
                  </SwiperSlide>
                ) : ''
              )
            }
        </Swiper>


        <div className="t-slide">
          <Link href='/exhibitions'><h4>프로그램</h4></Link>
          <Swiper 
            loop={true} 
            slidesPerView={3}
            // slidesPerGroup={5}
            navigation={true} 
            modules={[Navigation]} 
            className="mySwiper">
              {
                data?.education.map((obj,k)=>
                  (k<20) ? (
                    <SwiperSlide key={obj.id}>
                      <figure>
                        <img src={obj.EDU_IMG}/>
                        </figure>
                    </SwiperSlide>
                  ) : ''
                )
              }
          </Swiper>
        </div>

        <div className="t-slide">
          <Link href='/collection'><h4>소장품</h4></Link>
          <Swiper 
            loop={true} 
            slidesPerView={3}
            // slidesPerGroup={5}
            navigation={true} 
            modules={[Navigation]} 
            className="mySwiper">
              {
                data?.collection.map((a,b)=>
                  (b<20) ? (
                    <SwiperSlide key={a.id}>
                      <figure><img src={a.thumb_image}/></figure>
                    </SwiperSlide>
                  ) : ''
                )
              }
            </Swiper>
        </div>
      </div>
    </div>
  )
}


export async function getServerSideProps() {  
  let openApi = await getData();
  return { props: { openApi } }
}
export default Home