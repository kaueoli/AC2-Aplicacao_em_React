import React from "react";
import { Link } from "react-router-dom";
import './index.css';

export default function Sobre() {
    return(
        <div>
            <article>
                <h1>Travel Impactar - Agência de Viagens</h1>
                <Link to='/'>Retornar a página Inicial</Link>
                <p>A Travel Impactar é uma agência de viagens especializada em criar experiências únicas e inesquecíveis para seus clientes. Com anos de experiência no mercado de turismo, nossa equipe está pronta para ajudá-lo a planejar a sua próxima viagem de maneira fácil e segura.</p>
            </article>
            <article>
                <h2>Destinos</h2>
                    <p>Oferecemos diversos destinos nacionais e internacionais, entre eles:</p>
                    <ul>
                    <li>Europa</li>
                    <li>Estados Unidos</li>
                    <li>Ásia</li>
                    <li>América do Sul</li>
                    <li>Caribe</li>
                    </ul>
            </article>
            <article>
                <h2>Serviços</h2>
                    <p>Além de passagens aéreas e hospedagem, oferecemos serviços como:</p>
                    <ul>
                    <li>Traslados</li>
                    <li>Passeios turísticos</li>
                    <li>Assistência em viagem</li>
                    <li>Aluguel de carros</li>
                    <li>Seguro viagem</li>
                    </ul>
                    <p>Nosso objetivo é proporcionar a você a melhor experiência possível durante a sua viagem, com serviços personalizados de acordo com suas necessidades.</p>
            </article>
        </div>
    );
}