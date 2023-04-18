import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <h1>Bem-vindo à Travel Impactar</h1>
      <Link to='/'>Retornar a página Inicial</Link>
        <p>Somos uma agência de viagens especializada em proporcionar experiências incríveis para nossos clientes. Temos destinos exclusivos, pacotes personalizados e um atendimento excepcional.</p>
    </div>
  );
}

export default Home;