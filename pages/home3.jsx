import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import HeroSection from '@/components/HeroSection/HeroSection'
import CounterSection from '../components/CounterSection/CounterSection'
import BenefitsSection from '../components/BenefitsSection/BenefitsSection'
import LaunchSection from '../components/LaunchSection/LaunchSection'
import ServersSection from '../components/ServersSection/ServersSection'
import DataSection from '../components/DataSection/DataSection'

const home3 = () => {
  return (
    <div className='bg-[#151517]'>
      <Header />

      <HeroSection />

      <CounterSection />

      <BenefitsSection />

      <LaunchSection />

      <ServersSection />

      <DataSection />

      <Footer />
    </div>
  )
}

export default home3
