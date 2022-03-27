import { useState } from "react"
import ThankYou from "./ThankYou";
import star from '../images/icon-star.svg'

const RatingCard = () => {
  const [selected, setSelected] = useState(0);
  const [showRatingCard, setShowRatingCard] = useState(true);

  const ratings = [1, 2, 3, 4, 5];

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowRatingCard(!showRatingCard);
  }

  return (
    <>
      {
        showRatingCard ? 
        <div className='w-80 h-96 md:w-96 md:h-96 flex justify-center items-center bg-dark-blue rounded-3xl'>
          <div className='w-5/6 mx-auto h-full pt-6'>
            <div className='bg-very-dark-blue w-10 h-10 rounded-full p-3'>
              <img src={star} alt="star-logo" className=''/>
            </div>
            <h1 className='text-3xl font-overpass mt-4 font-extrabold'>How did we do?</h1>
            <p className='text-light-grey text-sm mt-4'>
              Please let us know how we did with your support request. All feedback is appreciated 
              to help us improve our offering!
            </p>
            <div className='mt-8'>
              <div className="flex justify-between items-center">
              {
                ratings.map((item) => (
                  <div key={item} onClick={() => setSelected(item)} className={`bg-medium-grey rounded-full w-10 h-10 flex items-center justify-center hover:bg-orange hover:text-white cursor-pointer transition-colors duration-300 ease-in-out
                  ${selected === item && 'bg-white text-orange hover:bg-white hover:text-orange'}`}>
                    {item}
                  </div>
                ))
              }
              </div>
            </div>
            <button onClick={handleSubmit} className="mt-8 w-full text-center rounded-full bg-orange py-2 hover:bg-white hover:text-orange transition-colors duration-300">SUBMIT</button>
          </div>
          </div>
          :
          <ThankYou item={ selected } />
      }
    </>
  )
}

export default RatingCard