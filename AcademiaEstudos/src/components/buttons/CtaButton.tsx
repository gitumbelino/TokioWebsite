interface CTAButtonProps {
    children: React.ReactNode
    variant: 'filled' | 'outline'
    href?: string
}

export default function CTAButton({ children, variant, href }: CTAButtonProps) {

    const buttonVariants = {
        filled: 'btn--cta-filled',
        outline: 'btn--cta-outline',
    }

    return (
        <a
            href={href}
            className={buttonVariants[variant]}>
            {children}
        </a>
    )
}
