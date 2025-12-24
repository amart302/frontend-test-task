import type { Service } from "./services";

interface ServiceCardProps{
    item: Service;
    add: (id: number) => void;
}
export default function ServiceCard({ item, add }: ServiceCardProps){

    return (
        <div className="service-card">
            <p className="service-card__title">{ item.title }</p>
            <div className="service-card__price">{ item.price } ₽</div>
            <button onClick={ () => add(item.id)}>Добавить</button>
        </div>
    );
}