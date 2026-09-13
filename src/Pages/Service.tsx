import SEO from '../components_test/SEO'
import ItsNotAbout from '../components_test/ServicePageComponents/ItsNotAbout'
import ClinicalFacial from '../components_test/ServicePageComponents/ClinicalFacial'
import PackagesAreComing from '../components_test/ServicePageComponents/PackagesAreComing'
import Process from '../components_test/ServicePageComponents/Process'
import BottomNav from '../components_test/BottomNav'
import Footer from '../components_test/Footer'
import UnlockYourBestSkin from '../components_test/ServicePageComponents/UnlockYourBestSkin'
import Cheker from '../components_test/ServicePageComponents/Cheker'

const Service = () => {
  return (
    <div style={{ backgroundColor: 'rgba(237, 235, 228, 1)'}}>
      <SEO
        title="Services & Treatments"
        description="Explore Sapir Skincare's facial and body treatments: deep cleaning facials, chemical peels, microneedling, radio frequency, Cosmelan, non-surgical eyelifts, and more."
        path="/service"
      />
      <ItsNotAbout />
      <ClinicalFacial />
      <PackagesAreComing />
      <Process />
      <UnlockYourBestSkin />
      <Cheker />
      <BottomNav />
      <Footer />
      
    </div>
  )
}

export default Service
