
const OurGoals = () => {
    const arr = [
        {
            title:"Enhance Natural Beauty",
            subTitle:"Highlight your unique features to boost your confidence.",
        },
        {
            title:"Promote Healthy Skin",
            subTitle:"Create personalized skincare routines to address specific concerns",
        },
        {
            title:"Educate and Empower",
            subTitle:"Provide knowledge on skincare practices and product choices",
        },
        {
            title:"Tailored Treatments",
            subTitle:"Customize treatments based on your skin type and needs.",
        },
        {
            title:"Foster Relaxation",
            subTitle:"Create a soothing environment for overall well-being.",
        },
        {
            title:"Achieve Visible Results",
            subTitle:"Deliver effective treatments for noticeable improvements",
        },
        {
            title:"Build Long-Term Relationships",
            subTitle:"Establish trust and open communication throughout your skincare journey",
        },
    ]
  return (
    <div className='flex flex-col gap-15 items-center p-15'>
      <div className='flex flex-col items-center gap-5'>
        <h2 className='text-4xl'>Our goals for your SKIN</h2>
        <p className='text-xs'>WE DEDICATED TO TRANSFORMING YOUR SKIN </p>
      </div>
      <div className='flex flex-col gap-5'>
        {arr.map((item) => (
            <div key={item.title} style={{ backgroundColor: "rgb(255, 253, 245)" }} className='p-2 border-1 border-black pr-30 pl-5 flex flex-col gap-1'>
            <p className='text-sm '>{item.title}</p>
            <p className='text-xs font-light'>{item.subTitle}</p>
        </div>
        ))}
        
      </div>
    </div>
  )
}

export default OurGoals
