interface CtaButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

export default function CtaButton({ children, onClick, className = '' }
  : CtaButtonProps) {
  return (
    <button className={`btn--primary ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}
