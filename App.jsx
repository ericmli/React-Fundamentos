import React from "react";

import "./App.css"
import Primeiro from './components/basics/Primeiro';
import ComParametro from './components/basics/ComParametro';
import Fragmento from './components/basics/Fragmento';
import Aleatorio from "./components/basics/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basics/Familia";
import FamiliaMembro from "./components/basics/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./comunicacao/DiretaPai";

export default props => (

    <div className="app">
        <h1>Fundamentos React</h1>

        <div className="cards">

            <Card titulo="09 - Comunicação Direta" color="#59323C">
                <DiretaPai></DiretaPai>
            </Card>
            <Card titulo="08 - Renderização Condicional" color="#982395">
                <ParOuImpar numero={21}></ParOuImpar>
                <UsuarioInfo usuario={{ nome: "Eric" }} />
                <UsuarioInfo />

            </Card>

            <Card titulo="07 - Repetição Exercicio" color="#0000FF">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="06 - Repetição" color="#D21620">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="05 - Componente com Filhos" color="#B456CD">
                <Familia sobrenome="Silva">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Gustavo" />
                </Familia>
            </Card>

            <Card titulo="04 - Desafio Aleatório" color="#FA6900">
                <Aleatorio min={10} max={60} />
            </Card>

            <Card titulo="03 - Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>

            <Card titulo="02 - Com Parâmetro" color="#E8B71A">
                <ComParametro
                    titulo="Segundo Componente"
                    aluno="João" nota={8} />
            </Card>

            <Card titulo="01 - Primeiro" color="#588C73">
                <Primeiro></Primeiro>
            </Card>
        </div>

    </div>
)


