import React, { useEffect, useState } from 'react';

const Adventure = ({ displayAdventures, setAdventure }) => {
  useEffect(() => {
    const fetchAdventures = async () => {
      try {
        const response = await fetch("https://newsdata.io/api/1/news?apikey=pub_30588c735d44d4271aab9f8d29889b20c3973&country=fr,ga,ge&language=nl,en,de&category=business,food");
        if (response.ok) {
          const data = await response.json();
          setAdventure(data.results);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchAdventures();
  }, []);

  return (
    <div>
      <div className='flex flex-wrap mt-20'>
        {displayAdventures.map((adventure) => (
          <div key={adventure.id} className='w-full sm:w-3/2 justify-center md:w-1/3 lg:w-1/4 p-4 flex flex-col items-center text-center'>
            <div className='w-3/4 flex justify-center flex-col items-center'>
              <a href={adventure.link}>
                <img src={adventure.image_url} alt={adventure.title} className='rounded-lg mt-28  h-auto' />
              </a>

              <div className='w-[250px]'>
              <p>{adventure.pubDate}</p>
              <p>{adventure.title}</p>
            </div>
            </div>
        
          </div>
        ))}
      </div>
    </div>
  );
};
export default Adventure;
