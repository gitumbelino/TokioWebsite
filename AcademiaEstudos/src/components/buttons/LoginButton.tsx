interface LoginButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

export default function LoginButton({ children, onClick, className = '' }: LoginButtonProps) {
  return (
    <button className={`btn--primary ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}
