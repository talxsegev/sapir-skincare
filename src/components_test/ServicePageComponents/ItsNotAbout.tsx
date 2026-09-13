import { Link } from 'react-router-dom'
import SegevClients7 from '../../assets/SegevClinets7.avif'

const ItsNotAbout = () => {
  return (
    <div className='relative flex items-center justify-center'>
            <img className='opacity-50 object-cover min-h-[500px]' src={SegevClients7} alt="" />
      <div className="absolute top-0 h-full mx-auto p-10 flex flex-col justify-center max-w-[500px] md:p-0">
        <div className="flex flex-col items-center gap-8">
          <h3
            className="text-3xl md:text-6xl text-center"
            style={{
              fontWeight: "100",
              color: "rgb(255,253,245)"
            }}
          >
            ITS NOT ABOUT HOW YOU LOOK, ITS ABOUT HOW YOU FEEL
          </h3>
          <p className='text-xs text-white'>
            SAPIR SKINCARE BEVERLY HILLS
          </p>
          <span
            className="font-light text-xs text-white"
          >
            FACE AND BODY CLINIC LOCATED ON RODEO DRIVE
          </span>
          <div className="flex flex-col justify-center items-center">
            <Link to="/contact"><button className="p-1 pr-10 pl-10 cursor-pointer text-sm font-extralight bg-white border border-transparent hover:border-black">
              Connect
            </button>
            </Link>
          </div>
        </div>
    </div>
    </div>
  )
}

export default ItsNotAbout