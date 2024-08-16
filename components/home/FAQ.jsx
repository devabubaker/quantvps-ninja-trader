import React, { useState } from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'

const Faq = () => {
  const faq = [
    {
      title: 'What is a Trading VPS, and how does it benefit traders?',
      desc: 'A Trading VPS is a Virtual Private Server optimized for financial trading on platforms such as MT4/MT5. It offers traders the ability to run their trading platforms 24/7 in a secure, stable, and fast environment. This is crucial for executing automated trades or strategies that require constant connectivity and low latency.'
    },
    {
      title:
        'Why is low latency important in trading, and how does your VPS ensure it?',
      desc: `Low latency is critical in trading because it ensures faster execution of trades, which can be the difference between profit and loss in fast-moving markets. Our VPS servers are strategically located near major financial data centers to ensure minimal delay between your trades and the market.
`
    },
    {
      title: 'Can I access my trading VPS from any device or location?',
      desc: `Yes, you can access your trading VPS from any device, whether it's a PC, laptop, tablet, or smartphone, as long as you have an internet connection. This flexibility allows you to monitor and execute trades from anywhere in the world.
`
    },
    {
      title:
        'How secure is a trading VPS, and what measures are in place to protect data?',
      desc: `Our trading VPS is equipped with state-of-the-art security features, including firewalls, encryption, and multi-level authentication processes. We also conduct regular security audits and updates to ensure your data and trading activities are protected against unauthorized access and cyber threats.
`
    },
    {
      title: 'What makes your trading VPS different from regular VPS services?',
      desc: `Our trading VPS is specifically designed for traders, with features like pre-installed trading platforms, ultra-low latency, high performance, and 24/7 support tailored to the needs of financial trading. Regular VPS services might not offer these specialized configurations and optimizations.
`
    },
    {
      title: 'How do I choose the right VPS plan for my trading needs?',
      desc: `Choosing the right plan depends on your trading requirements, including the number of trading platforms you intend to run, the complexity of your trading bots, and your expected data usage. Our team is available to help assess your needs and recommend the most suitable plan.
`
    },
    {
      title:
        'What kind of support can I expect if I face issues with my trading VPS?',
      desc: `We offer 24/7 technical support to address any issues you might encounter. Our team of experts can assist with VPS setup, configuration, and troubleshooting to ensure your trading activities run smoothly.
`
    },
    {
      title:
        'Are there any restrictions on trading platforms or brokers that can be used with your VPS?',
      desc: `Our VPS is compatible with all major trading platforms and brokers. This flexibility allows you to trade with your preferred broker and use any trading software without restrictions.
`
    },
    {
      title: 'How easy is it to upgrade or downgrade my VPS plan?',
      desc: `You can upgrade or downgrade your VPS plan at any time with minimal disruption to your trading. Our support team will assist with the transition to ensure your trading activities continue without interruption.
`
    },
    {
      title:
        'Can I test your trading VPS service before committing to a subscription?',
      desc: `Yes, we offer a trial period for our trading VPS, allowing you to test the performance and features before making a commitment. If you're not satisfied, we also provide a money-back guarantee within the first 30 days.
`
    },
    {
      title: 'How quickly can I get my trading VPS set up and start trading?',
      desc: `Your trading VPS can be set up and ready to use within a few hours after your order is processed. We provide full assistance during the setup phase to ensure you can start trading as quickly as possible.
`
    },
    {
      title: 'What happens to my open trades if the VPS goes down?',
      desc: `In the unlikely event of a VPS downtime, we have redundancy measures and backup systems in place to minimize disruptions. However, it's also recommended to have a contingency plan, such as setting stop-loss orders on your trades.
`
    },
    {
      title: 'Can I run multiple trading accounts from a single VPS?',
      desc: `Yes, our VPS allows you to run multiple trading accounts and platforms simultaneously. The exact number depends on the specifications of your chosen VPS plan.
`
    },
    {
      title: 'Do you offer backups for my VPS, and how can I access them?',
      desc: `We provide regular backups for your VPS to ensure your data and configurations are safe. These backups can be easily accessed and restored through your VPS management panel or with assistance from our support team.
`
    },
    {
      title:
        'How does the performance of your trading VPS compare to running a trading platform on my own computer ?',
      desc: `  A trading VPS typically offers superior performance compared to running trading platforms on a personal computer.This is due to our high - specification hardware, optimized network infrastructure, and dedicated resources designed to handle trading applications efficiently, ensuring faster execution and higher uptime.
`
    }
  ]

  return (
    <div
      id='faq'
      className='max-w-[1360px] mt-[50px] mx-auto rounded-[30px] border bg-white py-8 px-5 lg:p-[40px]'>
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
        <div>
          <h1 className='text-[#09090B] text-[35px] lg:text-[50px] '>FAQ</h1>
        </div>
        <div className=' lg:col-span-3'>
          <Accordion type='single' collapsible className='w-full'>
            {faq?.map((item, ind) =>
              <AccordionItem value={`item-${ind + 1}`} key={ind}>
                <AccordionTrigger>{item.title}</AccordionTrigger>
                <AccordionContent>
                  <div dangerouslySetInnerHTML={{ __html: item.desc }}></div>
                </AccordionContent>
              </AccordionItem>
            )}
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export default Faq
