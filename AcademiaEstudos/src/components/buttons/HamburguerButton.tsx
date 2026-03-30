interface HamburguerButtonProps {
    isOpen: boolean
    onClick: () => void
}

export default function HamburguerButton({ isOpen, onClick }: HamburguerButtonProps) {
    return (
        <button
            className="navbar__hamburger"
            onClick={onClick}
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isOpen}>
            <i className={isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} />
        </button>
    )
}