import "./services.css";
import type React from "react";
import type { Service } from "./services";

interface ServiceCardProps{
    item: Service;
    action?: React.ReactNode;
}
export default function ServiceCard({ item, action }: ServiceCardProps){

    return (
        <div className="service-card" key={ item.id }>
            <p className="service-card__title">{ item.title }</p>
            <div className="service-card__price">{ item.price } ₽</div>
            { action }
        </div>
    );
}