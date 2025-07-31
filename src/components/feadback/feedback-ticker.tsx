"use client"

import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimationFrame, useMotionValue } from 'motion/react';
import FeedbackCard from './feedback-card';
import { feedbacks } from '@/commons/data/feedbacks';

type FeedbackTickerProps = {
  speed?: number,
  direction?: 'left' | 'right'
}

export default function FeedbackTicker ({ speed = 60, direction = 'left' }: FeedbackTickerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  
  const x = useMotionValue(0)

  const [singleSetWidth, setSingleSetWidth] = useState(0)
  const [isMeasured, setIsMeasured] = useState(false)

  const CARD_SLOT_WIDTH = 532; 

  const calculateWidths = () => {
    if (contentRef.current) {
      const totalRenderedWidth = contentRef.current.offsetWidth
      setSingleSetWidth(totalRenderedWidth / 2)
      setIsMeasured(true)
    }
  }
  
  useEffect(() => {
    const initialMeasureTimeout = setTimeout(() => {
      calculateWidths();
    }, 200)

    const handleResize = () => {
      calculateWidths()
    }

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(initialMeasureTimeout);
      window.removeEventListener('resize', handleResize);
    }
  }, [feedbacks])

  useAnimationFrame((time, delta) => {
    if (!singleSetWidth || !isMeasured) return 

    const pixelsPerFrame = speed * (delta / 1000); 
    let currentX = x.get()

    if (direction === 'left') {
      currentX -= pixelsPerFrame
      if (currentX <= -singleSetWidth) {
        currentX += singleSetWidth
      }
    } else { 
      currentX += pixelsPerFrame
      if (currentX >= singleSetWidth) {
        currentX -= singleSetWidth
      }
    }

    x.set(currentX)
  })

  return (
    <div ref={containerRef} className="overflow-hidden whitespace-nowrap">
      <motion.div
        ref={contentRef}
        className="inline-block"
        style={{ x }}
      >
        {feedbacks.map((feedback, index) => (
          <div key={`first-${feedback.author}-${index}`} className="inline-block px-4 flex-shrink-0" style={{ width: CARD_SLOT_WIDTH + 'px' }}>
            <FeedbackCard
              author={feedback.author}
              text={feedback.text}
              avatarSrc={feedback.avatarSrc}
              avatarFallback={feedback.avatarFallback}
              rating={feedback.rating}
            />
          </div>
        ))}
        {feedbacks.map((feedback, index) => (
          <div key={`second-${feedback.author}-${index}`} className="inline-block px-4 flex-shrink-0" style={{ width: CARD_SLOT_WIDTH + 'px' }}>
            <FeedbackCard
              author={feedback.author}
              text={feedback.text}
              avatarSrc={feedback.avatarSrc}
              avatarFallback={feedback.avatarFallback}
              rating={feedback.rating}
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}