import "./services.css";
import { useState } from "react";
import ServiceCard from "./serviceCard";

export interface Service{
    id: number;
    title: string;
    price: number;
}

export default function Services(){
    const catalogServices = [
        {
            id: 1,
            title: "Услуга А",
            price: 2000
        },
        {
            id: 2,
            title: "Услуга Б",
            price: 3000
        },
        {
            id: 3,
            title: "Услуга В",
            price: 1500
        },
        {
            id: 4,
            title: "Услуга Г",
            price: 4000
        },
        {
            id: 5,
            title: "Услуга Д",
            price: 2500
        }
    ];

    const [ selectedServices, setSelectedServices ] = useState<Service[]>([]);

    const addToSelected = (id: number): void => {
        const foundFromCatalog = catalogServices.find((item: Service) => item.id === id);
        if(!foundFromCatalog){
            alert("Услуга не найдена");
            return;
        }

        const foundFromSelected = selectedServices.find((item: Service) => item.id === id);
        if(foundFromSelected){
            alert("Услуга уже добавлена");
            return;
        }

        const updateSelectedServices = [ ...selectedServices, foundFromCatalog ];
        setSelectedServices(updateSelectedServices);
    };

    const deleteFromSelected = (id: number): void => {
        const foundService = catalogServices.find((item: Service) => item.id === id);

        if(!foundService){
            alert("Услуга не найдена");
            return;
        }

        const updateSelectedServices = selectedServices.filter((item: Service) => item.id !== id);
        setSelectedServices(updateSelectedServices);
    };

    const finalPrice = (): number => {
        let totalPrice: number = 0;
        selectedServices.forEach((item: Service) => totalPrice += item.price);
        return totalPrice;
    };

    const placeAnOrder = (): void => {
        alert("Спасибо! Заказ оформлен");
        window.location.reload();
    };

    return (
        <div className="main-container">
            <div className="service-cards">
                <h2 className="service-cards__title">Каталог услуг</h2>
                {
                    catalogServices.map((item: Service) => (
                        <ServiceCard item={ item } action={ <button className="service-card__action" style={{ backgroundColor: "#80b918" }} onClick={ () => addToSelected(item.id) }>Добавить</button> } />
                    ))
                }
            </div>
            {
                selectedServices.length > 0 &&
                <div className="service-cards">
                    <h2 className="service-cards__title">Корзина</h2>
                    {
                        selectedServices.map((item: Service) => (
                            <ServiceCard item={ item } action={ <button className="service-card__action" style={{ backgroundColor: "#e5383b" }} onClick={ () => deleteFromSelected(item.id) }>Удалить</button> } />
                        ))
                    }
                    <div className="service-cards__total-price">Итого: { finalPrice() }  ₽</div>
                    <button className="service-cards__order-button" onClick={ () => placeAnOrder()}>Оформить заказ</button>
                </div>
            }
        </div>
    );
}