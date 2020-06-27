import React from 'react';

interface HeaderProps {
    title: string;
}

//Componente Escrito em formato de Função
// React.FC = Generics TS
const Header: React.FC<HeaderProps> = (props) => {
    return (

        <header>
            <h1>{props.title}</h1>
        </header>
    );
}

export default Header;