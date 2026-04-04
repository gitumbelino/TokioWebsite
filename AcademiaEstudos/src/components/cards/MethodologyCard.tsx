import type { MethodologyCard } from "../../types/cards";

interface MethodologyCardProps {
    methodology: MethodologyCard;
}

export default function MethodologyCard({ 
    methodology }: MethodologyCardProps) { 
        
    return (
        <div className="methodology-card">
            <div className="methodology-icon">
                <i className={methodology.icon}></i>
            </div>
            <h3 className="methodology-card__title">{methodology.title}</h3>
            <p className="methodology-description">{methodology.description}</p>
        </div>
    );
}
