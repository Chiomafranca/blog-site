import React, { useEffect, useState } from 'react';
import Travel from './Travel';
import Adventure from './Adventure';


const BodyContainer = () => {
  const [articles, setArticles] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [showAdventure, setShowAdventure] = useState(false);
  const [showTour, setShowTour] = useState(false);
  const [adventure, setAdventure] = useState([]);
  const [tour, setTour] = useState([]);


  useEffect(() => {
    fetch("https://newsdata.io/api/1/news?apikey=pub_30588c735d44d4271aab9f8d29889b20c3973")
      .then((res) => res.json()) 
      .then((data) => {
        setArticles(data.results)
        // Handle the data here
        console.log(data)
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }, []);
  
  
  const displayAdventures = showAdventure ? adventure : [];

  const displayTour = showTour ? tour : [];

  const displayedArticles = showAll ? articles : articles.slice(0, 8);

  return (
    <>
      <div className='relative top-36 text-left ml-5 text-black text-[30px] opacity-70'>
         <h1><b>Popular topics</b></h1>
      </div>

      <div className='gap-5 flex flex-col md:flex-row sm:flex justify-between relative top-40 ml-5 text-red-600 text-left'>
        <div className='flex gap-6'>
          <button onClick={() => setShowAll(!showAll)} className='text-red-700'>
            {showAll ? "All" : "All"}
          </button>
          <button onClick={() => setShowAdventure(!showAdventure)} className='text-black'>
            {showAdventure ? 'Adventure' : 'Adventure'}
          </button>
          <button onClick={() => setShowTour(!showTour)} className='text-black'>
            {showTour ? "Travel" : "Travel"}
          </button>
        </div>
        <div className='md:mr-7 text-black sm:text-right text-right mr-5 sm:relative ' id='viewall'>
          <button onClick={() => setShowAll(!showAll)}>
            {showAll ? "View All" : "View All"}
          </button>
        </div>
      </div>

      <Adventure
        displayAdventures={displayAdventures}
        setAdventure={setAdventure}
        adventure={adventure}
      />

      <Travel
        setTour={setTour}
        tour={tour}
        displayTour={displayTour}
      />

      <div className='flex flex-wrap py-36'>
        {displayedArticles.map((article, index) => (
          <div key={index} className="w-full sm:w-3/2 md:w-1/3 lg:w-1/4 p-4 flex flex-col items-center text-center" >
           <div className='w-3/4 flex justify-center items-center flex-col'>
           <a href={article.link} target="_blank" rel="noopener noreferrer" className=" text-[17px] py-2 w-[250px]" id='container'>
              <img src={article.image_url} alt="logo" className='w-full h-[230px] rounded-lg mx-4'  />
              <p className='mt-2 mb-1 text-[14px] text-center text-gray-500'>{article.publishedAt}</p>
            </a>
           </div>
            <p className='text-[13px] w-[300px] text-gray-500 my-1'>{article.title}</p>
          </div>
        ))}
      </div>
    </>
  );
};
export default BodyContainer;
