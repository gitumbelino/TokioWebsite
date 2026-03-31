interface CTAButtonProps {
  children: React.ReactNode
  variant: 'filled' | 'outline'
  href?: string
}

export default function CTAButton({ children, variant, href }: CTAButtonProps) {
  const cls = variant === 'filled' ? 'btn--cta-filled' : 'btn--cta-outline'
  return (
    <a href={href} className={cls}>{children}</a>
  )
}
