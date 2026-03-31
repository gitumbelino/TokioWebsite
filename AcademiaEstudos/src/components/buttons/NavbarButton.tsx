interface NavbarButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

export default function NavbarButton({ children, onClick, className = '' }
  : NavbarButtonProps) {
  return (
    <button className={`btn--primary ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}
