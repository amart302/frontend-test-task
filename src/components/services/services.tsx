import { useState } from "react";
import ServiceCard from "./serviceCard";

export interface Service{
    id: number;
    title: string;
    price: number;
}

export default function Services(){
    const [ services, setServices ] = useState<Service[]>([
        {
            id: 1,
            title: "Услуга А",
            price: 2000
        },
        {
            id: 2,
            title: "Услуга Б",
            price: 3000
        }
    ]);

    const [ selectedServices, setSelectedServices ] = useState<Service[]>([]);

    const add = () => {

    };

    return (
        <div className="service-cards">
            {
                services.map((item: Service) => (
                    <ServiceCard item={ item } />
                ))
            }
        </div>
    );
}