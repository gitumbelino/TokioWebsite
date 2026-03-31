import HeroBadge from "./badges/HeroBadge"
import CTAButton from "./buttons/CtaButton"


export default function CTA() {
    return (

        <section className="hero-section">
           <HeroBadge />
           <CTAButton variant="filled" children="Inscreva-se" href="/inscricoes"></CTAButton>
        
           <CTAButton variant="filled" children="Saiba mais" href="/sobre"></CTAButton>
        

        </section>


    )
}