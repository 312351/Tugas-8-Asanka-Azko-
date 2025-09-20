'use client'
import { motion } from "framer-motion"
import { useState, useEffect, ReactNode } from "react"

interface ArrowSwitchProps {
  Arrow: ReactNode[]
}

const ArrowSwitch = ({ Arrow}: ArrowSwitchProps) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % Arrow.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [Arrow.length])

  return (
    <motion.span
      key={index}
      initial={{ opacity: 0, y: 10, x: -10 }}
      animate={{ opacity: 1, y: 10, x: -10 }}
      exit={{ opacity: 0, y: 10, x: 10 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        x: 10,  
        y: -10,  
        transition: { type: "spring", stiffness: 200 }
      }}
      className={`w-[50px]`}
    >
      {Arrow[index]}
    </motion.span>
  )
}

export default ArrowSwitch
