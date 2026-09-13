
const ClinicalFacial = () => {
    const arr = [
        {
            title:"Deep Cleaning Facial",
            subTitle:"Experience the ultimate cleanse with our Deep Cleaning Facial, designed to remove impurities, unclog pores, and rejuvenate your skin. This treatment leaves your complexion fresh and revitalized, ensuring a healthy glow.",
            price:"$200"
        },
        {
            title:"Radio Frequency Treatment",
            subTitle:"Achieve tighter, lifted skin without surgery! Our Radio Frequency Treatment utilizes the latest technology to stimulate collagen production, combat sagging, and improve elasticity, giving you a youthful, lifted appearance",
            price:"$210"
        },
        {
            title:"Non Surgical face & neck lift",
            subTitle:"Turn back the clock with our Anti-Aging Treatment, designed to combat fine lines, wrinkles, and loss of elasticity. Utilizing advanced technology and powerful ingredients, this treatment rejuvenates your skin and restores a youthful glow",
            price:"$270"
        },
        {
            title:"Chemical Peel",
            subTitle:"Combine the benefits of deep cleansing with a chemical peel for a powerful treatment that exfoliates dead skin cells and promotes cell renewal. Our Chemical Peel treatment targets uneven skin tone, fine lines, and sun damage. Tailored to your skin type, this service effectively refreshes and revitalizes your skin, giving you a youthful appearance",
            price:"$250"
        },
        {
            title:"Cosmelan treatment",
            subTitle:"Our Cosmelan treatment is a game-changer for hyperpigmentation and melasma. This powerful depigmentation method not only brightens your complexion but also promotes even skin tone, revealing your skin's true brilliance",
            price:"$1,200"
        },
        {
            title:"Non Surgical eyelift",
            subTitle:"Say goodbye to droopy eyelids with our Non-Surgical Eyelift. This innovative treatment employs advanced techniques to tighten and lift the skin around your eyes, treat under eye bags and dark circles, drooping upper eyelids and fine lines and wrinkles.delivering dramatic results without invasive surgery.",
            price:"$350"
        },
        {
            title:"Microneedling treatment",
            subTitle:"A minimally invasive procedure designed to smooth away fine lines and wrinkles, create a more even skin tone, and reduce the appearance of blemishes and scars. skin needling and collagen induction therapy using sterile, disposable tips. Each tip contains 36 “micro” needles to pierce the skin at very specific therapeutic depths.  The thousands of tiny needle pricks stimulate collagen and elastin production.​Enhance your Microneedling experience with our Custom Cocktail, a blend of serums tailored to your skin's unique needs.",
            price:"$450"
        },
        {
            title:"Oxygen Facial",
            subTitle:"A powerful cocktail of ingredients is infused into the skin using pressurized oxygen, repairing the skin at a cellular level while improving your skins moisture levels. The serum is a combination of hyaluronic acid, vitamins A, C, E and green tea, which instantly hydrate the skin, reducing the appearance of fine lines, wrinkles and puffiness, leaving your skin balanced and glowing.",
            price:"$1,200"
        },
        {
            title:"Acne Facial",
            subTitle:"Target acne at its source with our specialized Acne Treatment. This comprehensive service combines deep cleansing, exfoliation, and targeted therapies to reduce breakouts and promote clear, healthy skin.",
            price:"$1,200"
        },
        {
            title:"Strach mark treatment",
            subTitle:"This effective treatment uses the latest advancements in technology to stimulate healing and collagen production, significantly reducing the appearance of stretch marks.follow with LED light therapy that leads to quicker and more dramatic outcomes for stretch mark reduction.",
            price:"PRICES VARY BASED ON THE PART OF THE BODY."
        },
        {
            title:"Body countoring",
            subTitle:"Sculpt and define your body with our Absculpt treatment, utilizing cutting-edge technology to target stubborn areas and help you achieve a more toned and contoured physique.This non-invasive treatment includes absolutely no downtime, pain, or discomfort, and works wonders at reducing cellulite, skin elasticity, burns fat at a faster rate and improves overall body profile.",
            price:"PRICES VARY BASED ON THE PART OF THE BODY."
        },
        
     
        
      
    ]
  return (
    <div className='p-5 gap-5 flex flex-col items-center' style={{backgroundColor:"rgba(178,176,171, 0.8)",}}>
        <div>
            <h1 className='text-3xl'>CLINICAL FACIAL</h1>
        </div>
        <div className='flex flex-col md:flex-row gap-5'>
            <div className='max-h-[1000px] flex flex-col gap-5 items-center'>
                {arr.slice(0,3).map((item)=>(
                    <div key={item.title} className='p-5 w-full md:max-w-[325px] flex flex-col items-center gap-5 ' style={{ backgroundColor: 'rgba(237, 235, 228, 1)' }}>
                    <h3 className='border-b-1 p-2 w-full text-center border-black font-bold text-xl'>{item.title}</h3>
                    <p className='text-sm font-light'>{item.subTitle}</p>
                    <p className='text-3xl font-light'>{item.price}</p>
                </div>
                ))}   
            </div>
            <div className='max-h-[1100px] flex flex-col gap-5 items-center'>
            {arr.slice(3,6).map((item)=>(
                    <div key={item.title} className='p-5 w-full md:max-w-[325px] flex flex-col items-center gap-5 ' style={{ backgroundColor: 'rgba(237, 235, 228, 1)' }}>
                    <h3 className='border-b-1 p-2 w-full text-center border-black font-bold text-xl'>{item.title}</h3>
                    <p className='text-sm font-light'>{item.subTitle}</p>
                    <p className='text-3xl font-light'>{item.price}</p>
                </div>
                ))}   
            </div>
            <div className='max-h-[1200px] flex flex-col gap-5 items-center'>
            {arr.slice(6,9).map((item)=>(
                    <div key={item.title} className='p-5 w-full md:max-w-[325px] flex flex-col items-center gap-5 ' style={{ backgroundColor: 'rgba(237, 235, 228, 1)' }}>
                    <h3 className='border-b-1 p-2 w-full text-center border-black font-bold text-xl'>{item.title}</h3>
                    <p className='text-sm font-light'>{item.subTitle}</p>
                    <p className='text-3xl font-light'>{item.price}</p>
                </div>
                ))}   
            </div>
        </div>
        <div className='flex flex-col gap-5'>
        <div>
            <h1 className='text-3xl text-center'>BODY TREATMENT</h1>
        </div>
        <div className='flex flex-col md:flex-row gap-5'>
        {arr.slice(9,10).map((item)=>(
                    <div key={item.title} className='p-5 w-full md:max-w-[325px] min-h-[385px] max-h-[385px] flex flex-col items-center gap-5 ' style={{ backgroundColor: 'rgba(237, 235, 228, 1)' }}>
                    <h3 className='border-b-1 p-2 w-full text-center border-black font-bold text-xl' >{item.title}</h3>
                    <p className='text-sm font-light'>{item.subTitle}</p>
                    <p className='text-lg font-light text-center'>{item.price}</p>
                </div>
                ))}   
        {arr.slice(10,11).map((item)=>(
                    <div key={item.title} className='p-5 w-full md:max-w-[325px] min-h-[485px] max-h-[485px] flex flex-col items-center gap-5 ' style={{ backgroundColor: 'rgba(237, 235, 228, 1)' }}>
                    <h3 className='border-b-1 p-2 w-full text-center border-black font-bold text-xl' >{item.title}</h3>
                    <p className='text-sm font-light'>{item.subTitle}</p>
                    <p className='text-lg font-light text-center'>{item.price}</p>
                </div>
                ))}   
        </div>
        </div>
    </div>
  )
}

export default ClinicalFacial
