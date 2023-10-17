import React, { useEffect, useState } from 'react'

const Travel = ({setTour, displayTour}) => {
  
  useEffect(() =>{
    const fetchTravel = async () =>{
        try{
          const response = await fetch("https://newsdata.io/api/1/news?apikey=pub_30588c735d44d4271aab9f8d29889b20c3973&country=fr,ge&language=nl,en&category=business ")
      
          if(response.ok){
             const data = await response.json()
             console.log(data)
             setTour(data.results)
          }
        }catch(error){
          console.error(error)
        }
    }
    fetchTravel()
  }, [])

  return (
    <div className='flex flex-wrap'>
    {displayTour.map((item, index) => (
      <div key={index} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 flex flex-col items-center text-center'>
        <div className='w-3/4 flex justify-center mt-10 flex-col items-center'>
          <a href={item.link}>
            <img src={item.image_url} width="300px" alt="logo" className='mt-28 rounded-lg sm:max-w-full sm:w-auto' />
          </a>
        </div>
        <div className='w-[270px]'>
          <p>{item.pubDate}</p>
          <p>{item.title}</p>
        </div>
      </div>
    ))}
  </div>
  
  )
}
export default Travel
