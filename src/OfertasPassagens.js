import React from "react";
import { Link } from "react-router-dom";
import './index.css';

export default function OfertasPassagens() {
    return(
        <div>
            <header>
		        <h1>Ofertas de Passagens Aéreas</h1>
                <Link to='/'>Retornar a página Inicial</Link>
            </header>
            <main>
                <h2>Destinos em Promoção</h2>
                <p>Aproveite nossas ofertas para os seguintes destinos:</p>
                <ul>
                    <li><a href="#">Nova York</a></li>
                    <li><a href="#">Miami</a></li>
                    <li><a href="#">Los Angeles</a></li>
                    <li><a href="#">Toronto</a></li>
                    <li><a href="#">Londres</a></li>
                    <li><a href="#">Paris</a></li>
                    <li><a href="#">Roma</a></li>
                    <li><a href="#">Tóquio</a></li>
                    <li><a href="#">Sydney</a></li>
                    <li><a href="#">Dubai</a></li>
                </ul>

                <h2>Regras das Ofertas</h2>
                <p>As seguintes regras se aplicam às nossas ofertas de passagens aéreas:</p>
                <ol>
                    <li>As tarifas são válidas por tempo limitado e estão sujeitas a disponibilidade;</li>
                    <li>As datas de viagem podem ser restritas;</li>
                    <li>As tarifas podem variar dependendo do destino e da época do ano;</li>
                    <li>As taxas e impostos são adicionais;</li>
                    <li>As condições de pagamento podem variar;</li>
                    <li>As regras de bagagem devem ser verificadas com a companhia aérea;</li>
                    <li>As alterações e cancelamentos podem ser restritos e/ou sujeitos a taxas adicionais;</li>
                    <li>As condições completas das ofertas podem ser encontradas no site da companhia aérea.</li>
                </ol>

            </main>

                </div>
    );
}