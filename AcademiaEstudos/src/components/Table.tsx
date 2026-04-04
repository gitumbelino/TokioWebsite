import type { Subject } from '../types/timetable';

interface TableProps {
    subjects: Subject[];
}

export default function Table({ subjects }: TableProps) {

    const times = ["09:00 - 10:30", "10:45 - 12:15", "14:00 - 15:30", "16:00 - 18:00"];
    const days = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

    return (
        <div className="timetable__wrapper">
            <table className="timetable">
                <thead>
                    <tr>
                        <th className="timetable__th">Hora</th>
                        {days.map(day => (
                            <th
                                key={day}
                                className="timetable__th">{day}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {times.map(time => (
                        <tr
                            key={time}
                            className="timetable__row"
                        >
                            <td className="timetable__time">{time}</td>
                            {days.map(day => {
                                const subject = subjects.find(s => s.time === time && s.day === day);
                                return (
                                    <td key={day} className="timetable__cell">
                                        {subject
                                            ? <span className={`timetable__badge timetable__badge--${subject.color}`}>{subject.name}</span>
                                            : <span className="timetable__empty">—</span>
                                        }
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
