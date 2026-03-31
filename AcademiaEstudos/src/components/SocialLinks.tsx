interface SocialLinksProps {
    variant: 'instagram' | 'facebook' | 'youtube' | 'linkedin'
}

export default function SocialLinks({ variant }: SocialLinksProps) {

    const SocialLinksVariations = {
        instagram: {
            href: "https://www.instagram.com/",
            iconClass: "fa-brands fa-instagram",
            ariaLabel: "Instagram"
        },
        facebook: {
            href: "https://www.facebook.com/?locale=pt_PT",
            iconClass: "fa-brands fa-facebook-f",
            ariaLabel: "Facebook"
        },
        youtube: {
            href: "https://www.youtube.com/",
            iconClass: "fa-brands fa-youtube",
            ariaLabel: "YouTube"
        },
        linkedin: {
            href: "https://www.linkedin.com/",
            iconClass: "fa-brands fa-linkedin-in",
            ariaLabel: "LinkedIn"
        }
    }

    const { href, iconClass, ariaLabel } = SocialLinksVariations[variant]

    return (
        <div className="footer__social-link" >
            <a href={href} target="_blank" aria-label={ariaLabel}>
                <i className={iconClass}></i>
            </a>
        </div>
    )
}
