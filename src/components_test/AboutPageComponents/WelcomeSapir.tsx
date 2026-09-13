import SegevPhoto8 from '../../assets/SegevPhoto8.avif'
import { Link } from 'react-router-dom'


const WelcomeSapir = () => {
  return (
    <div className='flex flex-col lg:flex-row'>
      <div className='lg:w-1/2'>
        <img src={SegevPhoto8} className='max-h-[705px] w-full' alt="Sapir Gumerove, founder of Sapir Skincare" />
      </div>
      <div className='p-0 md:p-30 mt-2 flex flex-col justify-evenly items-center text-center gap-10 md:gap-20'>
        <h1 className='text-3xl md:text-5xl'>WELCOME TO<br /> SAPIR SKINCARE</h1>
        <p className='text-1xl md:text-2xl'>YOUR NEW HOME FOR ADVANCED TREATMENT </p>
        <div className="flex flex-col justify-center items-center">
            <Link to="/contact"><button className="p-1 pr-5 pl-5 cursor-pointer text-sm font-extralight bg-white border border-transparent hover:border-black">
              CONNECT
            </button>
            </Link>
          </div>
      </div>
    </div>
  )
}

export default WelcomeSapir
