import SegevMenu from "../../assets/SegevMenu.avif"
import SegevPeopleOne from "../../assets/SegevPeopleOne.avif"
import { Link } from 'react-router-dom'

const Service = () => {
  return (
    <div>
    <div className='grid grid-cols-1 p-20 gap-25 justify-center items-center border-b-1 border-b-black md:flex' style={{ backgroundColor: "rgb(255, 253, 245)" ,fontWeight: "lighter",}}>
       <div className='flex flex-col gap-2 items-center' >
            <h2 className='text-4xl '>Services we offer</h2>
            <img src={SegevMenu} className='max-w-[343px] max-h-[460px]' alt="" loading="lazy" decoding="async" />
       </div>
       <div className='relative min-h-[650px] md:min-w-[550px] '>
        <div className='absolute -top-10 md:-top-15 md:right-0 right-0 flex justify-center '>
            <h1 className='text-7xl md:text-9xl'>Services</h1>
        </div>
        <div className='flex justify-center'>
            <img src={SegevPeopleOne} className='max-h-[507px] max-w-[357px]' alt="" loading="lazy" decoding="async" />
        </div>
        <div className=' max-w-[260px] p-3' style={{backgroundColor: "#FAF6F1" }}>
            <span className='font-light'>
                 We are dedicated to delivering expert aesthetic services, combining advanced techniques and personalized care to transform your skin and reveal your true beauty.
            </span>
        </div>
       </div>
    </div>
    <div className='p-10 flex items-center justify-center'>
      <div className='flex flex-col gap-2 text-center'>
        <h3 className='text-xl font-semibold'>Ready to glow?</h3>
        <p className='text-sm'>experience the transformation firsthand.</p>
        <div>
          <Link to="/contact"><button className="bg-white cursor-pointer p-1 px-5 text-sm rounded-full hover:text-white hover:bg-blue-300 transition-colors duration-300">Book Now</button></Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Service
