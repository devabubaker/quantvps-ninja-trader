import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import HeroSection from '@/components/HeroSection/HeroSection'
import CounterSection from '../components/CounterSection/CounterSection'
import BenefitsSection from '@/components/BenefitsSection/BenefitsSection'

const home3 = () => {
  return (
    <div className='bg-[#151517]'>
      <Header />

      <HeroSection />

      <CounterSection />

      <BenefitsSection />

      <Footer />
    </div>
  )
}

export default home3
