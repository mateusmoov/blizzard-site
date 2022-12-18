import React from 'react'

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant: 'filled' | 'outlined'
  icon?: React.ReactNode
}

const Button = ({ children, variant, className, icon, ...props }: ButtonProps) => {
  const variants = {
    filled: 'flex items-center rounded bg-primary ' + className,
    outlined:
      'flex items-center rounded border-2 border-solid border-white bg-transparent ' + className
  }
  return (
    <button {...props} className={variants[variant]}>
      {icon}
      <span className="font-poppins text-white">{children}</span>
    </button>
  )
}

export default Button
