import React from 'react'

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant: 'filled' | 'outlined'
  icon?: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant, className, icon, ...props }, forwardedRef) => {
    const variants = {
      filled: 'flex items-center rounded bg-primary ' + className,
      outlined:
        'flex items-center rounded border-2 border-solid border-white bg-transparent ' + className
    }
    return (
      <button {...props} className={variants[variant]} ref={forwardedRef}>
        <div className="flex justify-center gap-2	">
          {icon}
          <span className="font-poppins text-white">{children}</span>
        </div>
      </button>
    )
  }
)

Button.displayName = 'Button'
