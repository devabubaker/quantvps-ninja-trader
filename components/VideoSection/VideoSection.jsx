import VideoThumbnail from '../../assets/images/video-thumbnail.png'
import Image from 'next/image'
import AiSentimentAnalyzer1 from '../../assets/images/ai-sentiment-analyzer-1.svg'
import AiSentimentAnalyzer2 from '../../assets/images/ai-sentiment-analyzer-2.svg'
import AiSentimentAnalyzer3 from '../../assets/images/ai-sentiment-analyzer-3.svg'

const VideoSection = () => {
  return (
    <section className='relative overflow-hidden'>
      <Image
        src={AiSentimentAnalyzer1}
        alt='image'
        className='absolute right-0 top-[-36px]'
      />

      <Image
        src={AiSentimentAnalyzer2}
        alt='image'
        className='absolute right-0 top-[-8px]'
      />

      <Image
        src={AiSentimentAnalyzer3}
        alt='image'
        className='absolute right-[138px] bottom-[-49.232px]'
      />

      <div className='container py-[48px]'>
        <div className='flex justify-center items-center'>
          <div className='w-[800px] h-[484px] p-[10px] backdrop-blur-[66px] bg-surfaceBackground shadow-Shadow2 rounded-[31px] border-[1.987px] border-solid border-stroke15card '>
            <Image src={VideoThumbnail} alt='image' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoSection
