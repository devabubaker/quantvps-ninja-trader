import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import HeroSection from '@/components/HeroSection/HeroSection'
import CounterSection from '../components/CounterSection/CounterSection'
import BenefitsSection from '../components/BenefitsSection/BenefitsSection'
import LaunchSection from '../components/LaunchSection/LaunchSection'
import ServersSection from '../components/ServersSection/ServersSection'
import DataSection from '../components/DataSection/DataSection'
import VideoSection from '@/components/VideoSection/VideoSection'
import HowSection from '@/components/HowSection/HowSection'
import SelectSection from '@/components/SelectSection/SelectSection'
import TrustedSection from '@/components/TrustedSection/TrustedSection'
import LoveSection from '@/components/LoveSection/LoveSection'
import FaqSection from '@/components/FaqSection/FaqSection'
import BannerSection from '@/components/BannerSection/BannerSection'
import HighSection from '@/components/HighSection/HighSection'

const index = () => {
  return (
    <div className='bg-[#151517]'>
      <Header />

      <HeroSection />

      {/* test change */}

      <CounterSection />

      <BenefitsSection />

      <LaunchSection />

      <ServersSection />

      <DataSection />

      <VideoSection />

      <HowSection />

      <SelectSection />

      <TrustedSection />

      <LoveSection />

      <FaqSection />

      <BannerSection />

      <HighSection />

      <Footer />
    </div>
  )
}

export default index
