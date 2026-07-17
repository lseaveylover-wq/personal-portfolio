'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import animationData from '@/public/programming-laptop.json'

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

export default function LaptopIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="relative flex items-center justify-center w-full h-full"
    >
      <div className="w-full max-w-[600px] h-[500px]">
        <Lottie 
          animationData={animationData}
          loop={true}
          autoplay={true}
          className="w-full h-full drop-shadow-2xl"
        />
      </div>
    </motion.div>
  )
}
