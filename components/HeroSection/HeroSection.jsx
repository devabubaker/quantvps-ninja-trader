import Image from 'next/image'
import HeroBgImg from '../../assets/images/hero-bg-img.svg'
import HeroBullImg from '../../assets/images/hero-bull-img.svg'
import HeroLogoImg from '../../assets/images/hero-bg-logo.svg'
import Trustpilot from '../../assets/images/trustpilot.png'
import Equinix from '../../assets/images/equinix.png'

const HeroSection = () => {
  return (
    <section className='w-[100%] overflow-hidden h-[720px] px-[120px] relative'>
      <Image
        src={HeroBgImg}
        alt='image'
        className='absolute top-0 left-0 w-[100%] h-[900px] object-cover'
      />

      <div className='w-[749.581px] h-[716.84px] absolute bottom-[-6.176px] right-[-98.846px]'>
        <Image
          src={HeroBullImg}
          alt='image'
          className='absolute bottom-0 right-0 z-[2]'
        />

        <Image
          src={HeroLogoImg}
          alt='image'
          className='absolute bottom-0 left-0  z-[1]'
        />
      </div>

      <div className='container z-[1]'>
        <div className=' relative top-[50%] translate-y-[-50%] max-w-[671px] px-[16px]'>
          <h1 className='text-[#F5F5F7] max-w-[522px] font-SfProDisplaySemibold text-[48px] leading-[57.6px] tracking-[-0.144px]'>
            <span className='hero-gradient-text bg-clip-text text-transparent bg-linearGradient1'>
              Low Latency
            </span>{' '}
            Servers for Algo-Trading
          </h1>

          <p className='mt-[12px] mb-[24px] text-[#F9FAFB] font-SfProRegular leading-[22.5px] max-w-[573px] text-[15px]'>
            Our servers optimized for all brokers, offering a fast + secure
            environment for executing trades
          </p>

          <ul className='flex flex-col gap-[11px]'>
            {[
              '100% uptime guaranteed',
              '1 millisecond latency to CME',
              'Support team on standby 24/7',
              'Chicago or New York Data Center'
            ].map((item, i) => (
              <li
                key={i}
                className='flex items-center gap-[4px] text-white font-SfProRegular text-[13px] leading-[13px]'>
                <svg
                  width='16'
                  height='17'
                  viewBox='0 0 16 17'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M6.39754 2.51893C6.23519 2.65729 6.15401 2.72647 6.06731 2.78458C5.86858 2.91778 5.64539 3.01023 5.41067 3.05657C5.30828 3.07678 5.20196 3.08526 4.98932 3.10223C4.45507 3.14487 4.18794 3.16618 3.96508 3.2449C3.44961 3.42697 3.04416 3.83242 2.86209 4.34789C2.78337 4.57075 2.76205 4.83788 2.71942 5.37214C2.70245 5.58477 2.69397 5.69109 2.67375 5.79348C2.62741 6.0282 2.53497 6.25139 2.40176 6.45012C2.34365 6.53682 2.27448 6.618 2.13612 6.78035C1.78849 7.18827 1.61467 7.39224 1.51275 7.60549C1.277 8.09872 1.277 8.67211 1.51275 9.16535C1.61467 9.3786 1.78849 9.58256 2.13612 9.99048C2.27446 10.1528 2.34366 10.234 2.40176 10.3207C2.53497 10.5194 2.62741 10.7426 2.67375 10.9774C2.69397 11.0797 2.70245 11.1861 2.71942 11.3987C2.76205 11.933 2.78337 12.2001 2.86209 12.4229C3.04416 12.9384 3.44961 13.3439 3.96507 13.5259C4.18794 13.6046 4.45507 13.626 4.98932 13.6686C5.20196 13.6856 5.30828 13.6941 5.41067 13.7143C5.64539 13.7606 5.86858 13.8531 6.06731 13.9863C6.15401 14.0444 6.23519 14.1135 6.39754 14.2519C6.80546 14.5995 7.00943 14.7733 7.22268 14.8753C7.71591 15.111 8.2893 15.111 8.78253 14.8753C8.99578 14.7733 9.19975 14.5995 9.60767 14.2519C9.77002 14.1135 9.8512 14.0444 9.9379 13.9863C10.1366 13.8531 10.3598 13.7606 10.5945 13.7143C10.6969 13.6941 10.8032 13.6856 11.0159 13.6686C11.5501 13.626 11.8173 13.6046 12.0401 13.5259C12.5556 13.3439 12.9611 12.9384 13.1431 12.4229C13.2218 12.2001 13.2432 11.933 13.2858 11.3987C13.3028 11.1861 13.3112 11.0797 13.3315 10.9774C13.3778 10.7426 13.4702 10.5194 13.6034 10.3207C13.6616 10.234 13.7307 10.1528 13.8691 9.99048C14.2167 9.58256 14.3905 9.3786 14.4925 9.16535C14.7282 8.67211 14.7282 8.09872 14.4925 7.60549C14.3905 7.39224 14.2167 7.18828 13.8691 6.78035C13.7307 6.618 13.6616 6.53682 13.6034 6.45012C13.4702 6.25139 13.3778 6.0282 13.3315 5.79348C13.3112 5.69109 13.3028 5.58477 13.2858 5.37214C13.2432 4.83788 13.2218 4.57075 13.1431 4.34789C12.9611 3.83242 12.5556 3.42697 12.0401 3.2449C11.8173 3.16618 11.5501 3.14487 11.0159 3.10223C10.8032 3.08526 10.6969 3.07678 10.5945 3.05657C10.3598 3.01023 10.1366 2.91778 9.9379 2.78458C9.8512 2.72647 9.77002 2.65729 9.60767 2.51893C9.19975 2.1713 8.99578 1.99749 8.78253 1.89556C8.2893 1.65981 7.71591 1.65981 7.22268 1.89556C7.00943 1.99749 6.80546 2.17131 6.39754 2.51893ZM10.9183 6.96084C11.1301 6.74895 11.1301 6.40541 10.9183 6.19353C10.7064 5.98164 10.3628 5.98164 10.1509 6.19353L6.91745 9.42702L5.85424 8.36382C5.64236 8.15193 5.29882 8.15193 5.08693 8.36382C4.87504 8.57571 4.87504 8.91925 5.08693 9.13113L6.53379 10.578C6.74568 10.7899 7.08922 10.7899 7.30111 10.578L10.9183 6.96084Z'
                    fill='white'
                  />
                </svg>

                {item}
              </li>
            ))}
          </ul>

          <button className='h-[40px] inline-flex justify-center items-center py-[12px] px-[24px] gap-[8px] shadow-Shadow1 text-white font-SfProMedium text-[13px] my-[32px] leading-[19.5px] rounded-[8px] border border-solid border-[#000] bg-[#0171E3]'>
            <svg
              width='16'
              height='17'
              viewBox='0 0 16 17'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8.63747 0.555173C8.6078 0.469505 8.54138 0.406649 8.46128 0.388273C8.38109 0.369908 8.29818 0.398519 8.24096 0.464263L3.94119 5.40817C3.86125 5.50009 3.84987 5.64252 3.91395 5.74899C3.97803 5.85545 4.0999 5.89656 4.20554 5.84734L7.90534 4.12392L11.7746 11.0804C11.8406 11.1989 11.9757 11.2415 12.0869 11.1788C12.1979 11.1161 12.2483 10.9689 12.2031 10.8388L8.63747 0.555173ZM6.29302 7.28416C6.3552 7.16379 6.326 7.01004 6.22551 6.9287C6.12503 6.84734 5.98602 6.86495 5.90415 6.96937L0.0601284 14.4235C0.00403145 14.495 -0.0144122 14.5945 0.0115756 14.6853C0.0375635 14.7761 0.104143 14.8448 0.186839 14.8661L6.03086 16.3759C6.14202 16.4047 6.25584 16.3418 6.30352 16.2253C6.3512 16.1089 6.31964 15.9708 6.22793 15.8946L3.16158 13.3464L6.29302 7.28416ZM14.0539 9.0563C14.016 8.93096 13.9029 8.85499 13.7867 8.87657C13.6705 8.89826 13.5853 9.01118 13.5853 9.1436V13.3912L6.45272 13.5482C6.32821 13.5509 6.22611 13.6599 6.21727 13.7995C6.20843 13.9391 6.29577 14.0633 6.41868 14.0859L15.7204 15.7906C15.8039 15.806 15.8885 15.7709 15.9431 15.6983C15.9977 15.6257 16.0144 15.5263 15.9871 15.4363L14.0539 9.0563Z'
                fill='white'
              />
            </svg>
            Launch your own VPS now
          </button>

          <div className='flex items-end gap-[31.84px]'>
            <Image src={Trustpilot} alt='image' className='max-w-[182.16px]' />

            <Image src={Equinix} alt='image' className='max-w-[199.29px]' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
