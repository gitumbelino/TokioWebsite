import MethodologyCard from '../components/cards/MethodologyCard';
import Table from '../components/Table';
import type { MethodologyCard as MethodologyCardType } from '../types/cards';
import type { Subject } from '../types/timetable';

interface MethodsProps {
  methodologyCards: MethodologyCardType[];
  timetable: Subject[];
}

function Methods({ methodologyCards, timetable }: MethodsProps) {
  return (
    <>
      <section className="section section--dark">
        <div className="container">
          <div className="section__header section__header--centered">
            <span className="section__eyebrow">Metodologia</span>
            <h1 className="section__title">Os Nossos Pilares de Ensino</h1>
            <p className="section__subtitle">
              A nossa abordagem baseia-se em princípios de disciplina militar aplicados ao estudo intensivo. 
              Combinamos aulas teóricas profundas com treino prático constante para garantir que domina cada aspecto do seu exame.
            </p>
          </div>
          <div className="grid grid--3">
            {methodologyCards.map((card) => (
              <MethodologyCard key={card.id} methodology={card} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">Preparação intensiva </h2>
            <p className="section__subtitle">Uma estrutura rigorosa é a base do sucesso.  <br/>
            O nosso horário é desenhado para otimizar os ciclos de aprendizagem e descanso.</p>
          </div>
          <Table subjects={timetable} />
        </div>
      </section>
    </>
  )
}

export default Methods
