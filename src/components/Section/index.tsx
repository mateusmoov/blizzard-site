import React from 'react'
import clsx from 'clsx'

interface SectionProps {
  className: string
  children: React.ReactNode
}

export const Section = ({ className, children }: SectionProps) => {
  return <div className={clsx('container mx-auto items-center', className)}>{children}</div>
}

export default Section
