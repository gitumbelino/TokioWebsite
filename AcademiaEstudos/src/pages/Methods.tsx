import MethodologyCard from '../components/cards/MethodologyCard';
import type { MethodologyCard as MethodologyCardType } from '../types/cards';

interface MethodsProps {
  methodologyCards: MethodologyCardType[];
}

function Methods({ methodologyCards }: MethodsProps) {
  return (
    <section className="section section--light">
      <div className="container">
        <div className="section__header section__header--centered">
          <h2 className="section__title">Os Nossos Pilares de Ensino</h2>
        </div>
        <div className="grid grid--3">
          {methodologyCards.map((card) => (
            <MethodologyCard key={card.id} methodology={card} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Methods
