import ImgUnlock1 from "../../assets/ImgUnlock1.avif";
import ImgUnlock2 from "../../assets/ImgUnlock2.avif";
import { RiMailOpenFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";

const Connect = () => {
  return (
    <div className='inline-block md:hidden'>
      <div>
        <div className='flex flex-col gap-10 items-center pt-5 pb-15'>
            <h3 className='text-4xl'>CONNECT</h3>
        <div className='flex justify-between relative gap-5'>
            <div className=''>
                <img src={ImgUnlock1} alt="" loading="lazy" decoding="async" />
            </div>
            <div className=' p-3 absolute left-1/2 top-2/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center' style={{ backgroundColor: "rgb(255, 253, 245)" }}>
                <p className='font-light text-xs text-center'>We are dedicated to delivering expert services, combining advanced techniques and personalized care to transform your skin and reveal your true beauty</p>
            </div>
            <div className=''>
                <img src={ImgUnlock2} alt="" loading="lazy" decoding="async" />
            </div>
        </div>
        </div>
        <div className='p-5 flex flex-col gap-5'>
            <h3 className='text-xl'>Sapir Skincare Beverly Hills</h3>
            <div className='flex flex-col gap-5'>
                <div className='flex flex-col gap-3'>
                    <h4 className='text-lg'>Working Hours:</h4>
                    <div className='flex flex-col'>
                        <span className='text-md font-light'>MON - FRI: 9:00 am - 8:00 pm</span>
                        <span className='text-md font-light'>SAT: Closed</span>
                        <span className='text-md font-light'>SUN: 10:00 am - 4:00pm</span>
                    </div>
                </div>
                <div >
                    <div className='flex flex-col gap-3'>
                        <h4 className='text-lg'>Address:</h4>
                        <span className='text-md font-light'>421 North Rodeo Drive. Beverly Hills, CA<br />90210</span>
                    </div>
                </div>
                <div>
                    <span className='text-md font-light'>Have a question? I'd love to hear from<br /> you!</span>
                </div>
                <div className='flex flex-col gap-1'>
                    <a href="mailto:sapirskincarela@gmail.com" className="flex gap-2">
                <RiMailOpenFill />
                <span className="text-xs font-light">
                  sapirskincarela@gmail.com
                </span>
                </a>
                    <a href="tel:+18182662387" className='flex gap-2 items-center'><FaPhoneAlt /><span className='text-md font-light'>(818) 266-2387</span></a>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Connect
