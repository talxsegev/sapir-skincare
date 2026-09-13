import Soup from '../../assets/Soap.avif'
import { Link } from 'react-router-dom'


const Connect = () => {
  return (
    <div className='p-15 min-h-[430px] flex justify-center' style={{backgroundImage:`url(${Soup})`,backgroundSize: 'cover',backgroundPosition: 'center',}}>
      <div className="p-10 flex flex-col justify-center max-w-[300px] md:p-0">
        <div className="flex flex-col gap-8">
          <h3
            className="text-3xl font-light text-center"
            style={{
              fontWeight: "lighter",
            }}
          >
            Connect to get a free sample
          </h3>
          <span
            className="font-light text-xs"
          >
            Join our newsletter for exclusive skincare tips, product recommendations, and special offers delivered straight to your inbox. Don't miss out on your journey to glowing, healthy skin!
          </span>
          <div className="flex flex-col justify-center items-center">
            <Link to="/contact">
            <button className="p-1 pr-10 pl-10 cursor-pointer text-sm font-extralight bg-white border border-transparent hover:border-black">
              Connect
            </button>
            </Link>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Connect
