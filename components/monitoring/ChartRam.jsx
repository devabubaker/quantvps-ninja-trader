import React, { PureComponent } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

const ChartRam = ({ statsData }) => {
  // Convert JSON data to Rechart format
  const rechartData = statsData?.map(item => {
    // Convert time to formatted date
    const date = new Date(item.time * 1000) // Multiply by 1000 to convert seconds to milliseconds
    const formattedDate = date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    })

    // Calculate CPU usage as a percentage
    // const inbound = ( / 1000).toFixed(1);
    // const outbound = (item.netout / 100).toFixed(1);

    const memory = (item.mem / 1024 ** 3).toFixed(2)
    console.log('memo', memory)
    return {
      name: formattedDate,
      mem: memory
    }
  })

  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div className='custom-tooltip bg-white rounded-[6px] border p-2 shadow-sm'>
          <p className='label text-[14px] text-body '>{`${label}`}</p>
          <p className='label text-[14px] text-[#8884d8]'>{`Memory used: ${payload[0]?.value} GB`}</p>
        </div>
      )
    }

    return null
  }

  const xAxisFormatter = tick => {
    // Slice the data to show only the last 11 characters
    return tick.slice(-8)
  }
  const yAxisFormatter = tick => {
    // Slice the data to show only the last 11 characters
    return `${tick} GB`
  }
  return (
    <div className='w-full h-[400px] flex items-center justify-center'>
      <ResponsiveContainer width='100%' height='100%'>
        <LineChart
          width={500}
          height={300}
          data={rechartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis tickFormatter={xAxisFormatter} dataKey='name' />
          <YAxis tickFormatter={yAxisFormatter} />
          <Tooltip content={<CustomTooltip />} />
          {/* <Legend /> */}

          <Line type='monotone' dataKey='mem' stroke='#8884d8' />

          {/* <Line type="monotone" dataKey="outbound" stroke="#82ca9d" /> */}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ChartRam
