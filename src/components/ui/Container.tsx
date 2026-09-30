import type { ComponentProps } from 'react'

export function Container({ className = '', ...props }: ComponentProps<'div'>) {
  return <div className={`mx-auto w-full max-w-[1168px] px-5 md:px-6 ${className}`} {...props} />
}
