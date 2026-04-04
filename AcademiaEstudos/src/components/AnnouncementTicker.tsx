import { useState, useEffect } from 'react';
import type { TickerItem } from '../types/ticker';

const items: TickerItem[] = [
  {
    label: 'GNR',
    labelColor: 'var(--color-accent-primary)',
    text: 'Provas Físicas — Inscrições até 15 de Maio',
  },
  {
    label: 'PSP',
    labelColor: 'var(--color-accent-prestige)',
    text: 'Exame Teórico — Nova data: 22 de Junho',
  },
  {
    label: 'Fuzileiros',
    labelColor: 'var(--color-accent-utility)',
    text: 'Abertura de Concurso — Prepare-se já',
  },
  {
    label: 'Força Aérea',
    labelColor: 'var(--color-navy-muted)',
    text: 'Testes Psicotécnicos — Resultados disponíveis',
  },
];

const INTERVAL = 4000;

export default function AnnouncementTicker() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % items.length);
        setVisible(true);
      }, 400);
    }, INTERVAL);

    return () => clearInterval(timer);
  }, []);

  const item = items[current];

  return (
    <div className="announcement-ticker">
      <div className="announcement-ticker__inner">
        <div
          className={`announcement-ticker__item${visible ? ' announcement-ticker__item--visible' : ''}`}
        >
          <span
            className="announcement-ticker__label"
            style={{ color: item.labelColor }}
          >
            {item.label}
          </span>
          <span className="announcement-ticker__divider">|</span>
          <span className="announcement-ticker__text">{item.text}</span>
        </div>
      </div>
    </div>
  );
}
