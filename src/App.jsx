import React from "react";

//stylesheet
import './App.css';

//components import
import Card from "./components/layout/Card";

import CompMember from './components/basics/CompMember';
import CompFamily from './components/basics/CompFamily';
import SecondParams from './components/basics/SecondParams';

import ListStudent from './components/repeat/ListStudent';
import TableProducts from "./components/repeat/TableProducts";
import EvenOdd from "./components/conditional/EvenOdd";

const app = () => (
    <div className="App">
        <div className="Cards">

            <Card title='First' color='#1D8348'>
                <SecondParams
                    situation='student situation'
                    name='Dex'
                    grade={9.3} />
            </Card>

            <Card title='Family Members'>
                <CompFamily lastName='Fergusson'>
                    <CompMember name='Karen' />
                    <CompMember name='Harry' />
                    <CompMember name='Karoline' />
                </CompFamily>
            </Card>

            <Card title="List Students" color='#D4AC0D'>
                <ListStudent/>
            </Card>

            <Card title='Table of Products' color='#6C3483'>
                <TableProducts/>
            </Card>

            <Card title='Even or Odd'>
                <EvenOdd number={21}/>
            </Card>
        </div>
    </div>
);

export default app;