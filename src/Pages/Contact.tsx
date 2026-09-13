import SEO from '../components_test/SEO'
import Connect from '../components_test/ContactPageComponents/Connect'
import BottomNav from '../components_test/BottomNav'
import Footer from '../components_test/Footer'
import ConnectDesktop from '../components_test/ContactPageComponents/ConnectDesktop'
import Details from '../components_test/ContactPageComponents/Details'

const Contact = () => {
  return (
    <div style={{ backgroundColor: "rgba(237, 235, 228, 1)"}}>
      <SEO
        title="Contact Us"
        description="Get in touch with Sapir Skincare Beverly Hills. Located at 421 North Rodeo Drive. Book your appointment today."
        path="/contact"
      />
      <Connect />
      <ConnectDesktop />
      <Details />
      <BottomNav />
      <Footer />
    </div>
  )
}

export default Contact
