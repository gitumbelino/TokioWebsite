import HeroBadge from './badges/HeroBadge'
import CTAButton from './buttons/CtaButton'
import heroImg from '../assets/hero.jpg'




export default function Hero() {
    return (
        <section className="section section--hero section--dark">
            <div className="container">
                <div className="hero__inner">

                    <div className="hero__content">
                        <HeroBadge
                            label="Excelência Comprovada"
                        />
                        <h1>Preparação Rigorosa Para
                            <span>Concursos Públicos</span>
                        </h1>
                        <p>Metodologia militar aplicada ao ensino civil.
                            Disciplina, foco e resultados estruturados para
                            garantir o seu sucesso nos exames mais exigentes.
                        </p>
                        <div className="flex flex--gap-md mt-3">
                            <CTAButton variant="filled" href="/cursos">Iniciar Preparação</CTAButton>
                            <CTAButton variant="outline" href="/metodologia">Ver Metodologia</CTAButton>
                        </div>
                    </div>

                    <div className="hero__media">
                        <img
                            src={heroImg}
                            alt="Saudação Militar"
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}
