import thanks from '../images/illustration-thank-you.svg'
  
const ThankYou = ({ item }) => {
  return (
    <div className='w-80 md:w-96 md:h-96 flex justify-center items-center bg-dark-blue rounded-3xl'>
      <div className='w-5/6 mx-auto h-full pt-6 text-center'>
        {/* image */}
        <div className='flex justify-center items-center'>
          <img src={thanks} alt="Thank-You" />
        </div>
        <div className='bg-very-dark-blue rounded-2xl py-1 mt-4'>
          <p className='text-orange '>You selected { item } out of 5.</p>  
        </div>
        {/* Text area */}
        <h1 className='text-2xl font-semibold mt-8'>Thank you!</h1>
        <p className='text-medium-grey text-sm mt-4 pb-6'>
          We appreciate you taking the time to give a rating. If you ever need more support, 
          don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  )
}

export default ThankYou