import Sea from "../../assets/Sea.jpg"
import SegevClients10 from "../../assets/SegevClinets10.avif"
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";

const WelcomeBlog = () => {
  return (
    <div className='p-15 max-h-[500px] gap-1 flex flex-col xl:flex-row items-center xl:items-start justify-evenly' style={{backgroundImage:`url(${Sea})`,backgroundSize: 'cover',backgroundPosition: 'center',}}>
      <div className="flex flex-col justify-center max-w-[300px] md:p-0">
        <div className="flex flex-col items-center  relative">
          <h3
            className="text-7xl font-light absolute -top-10 z-10 text-center w-full"
            style={{
              fontWeight: "lighter",
            }}
          >
            BLOG
          </h3>
          <img src={SegevClients10} className='max-h-[250px] max-w-[250px]' alt="Sapir Skincare" />
          <div className='mt-1 flex gap-3'>
              <a href="https://www.instagram.com/sapirskincare/" target="_blank" rel="noopener noreferrer" aria-label="Sapir Skincare on Instagram"><FiInstagram  className='w-3 h-3'/></a>
              <a href="https://www.facebook.com/sapir.segev.52" target="_blank" rel="noopener noreferrer" aria-label="Sapir Skincare on Facebook"><FaFacebookF  className='w-3 h-3'/></a>
          </div>
        </div>
    </div>
    <div style={{ backgroundColor: 'rgba(237, 235, 228, 1)' }} className="hidden items-center  text-center md:flex flex-col md:p-5 max-h-[200px] border-1 border-black">
  <div className="flex flex-col gap-8 text-center items-center justify-center px-4">
    <div>
      <h1 className="text-3xl font-semibold">Welcome to my blog!</h1>
    </div>
    <div>
      <p className="text-sm font-light max-w-xl mx-auto text-center">
        where I share expert insights, skincare tips, and the latest trends in beauty to help you<br /> achieve your healthiest, most radiant skin!
      </p>
    </div>
  </div>
</div>

    </div>
  )
}

export default WelcomeBlog
