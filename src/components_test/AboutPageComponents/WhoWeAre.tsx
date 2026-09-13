import SegevPhoto9 from '../../assets/SegevPhoto9.avif'

const WhoWeAre = () => {
  return (
    <div className="p-15 flex flex-col items-center " style={{ backgroundColor: "rgb(255, 253, 245)" }}>
      <div className="flex flex-col-reverse  md:flex-row justify-center items-center gap-10 md:gap-0">
        <div className="flex flex-col max-w-[580px]">
          <h4 className="text-center text-sm">
            A RENOWNED FACE AND BODY CLINIC IN THE HEART
            <br /> OF RODEO DRIVE
          </h4>
          <p className="text-sm font-light p-10 max-w-[450px]">
            Sapir Skin Care focuses on offering a wide selection of therapeutic,
            corrective and effective treatments with a blend of relaxation.
            Located in a unique oasis of tranquility based in Los Angeles. My
            journey began after many years of working at top medical spas in
            Beverly Hills. I came to the realization that skin care is not only
            about achieving certain results, but about taking care of your mind
            and soul in the process. Sapir Skin Care was born from the idea that
            corrective treatments should be performed in a nurturing, warm, and
            inviting space so that you leave feeling fully transformed and
            renewed in every aspect. I truly believe that when you feel good, it
            radiates on the outside. My approach focuses on combining hands on
            treatment along with the most up to date innovations in aesthetics,
            because you should never have to choose between the two.
          </p>
        </div>
        <div className="  pr-20 pl-20 relative flex flex-col items-center">
          <img src={SegevPhoto9} className="max-w-[300px]" alt="" loading="lazy" decoding="async" />
          <h1 className="text-6xl md:text-7xl absolute bottom-0">Who WE ARE</h1>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
