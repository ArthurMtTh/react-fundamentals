import React from "react";

//stylesheet
import './App.css';

//components import
import Card from "./components/layout/Card";

//basics
import CompMember from './components/basics/CompMember';
import CompFamily from './components/basics/CompFamily';
import SecondParams from './components/basics/SecondParams';

//repeat
import ListStudent from './components/repeat/ListStudent';
import TableProducts from "./components/repeat/TableProducts";

//conditional
import EvenOdd from "./components/conditional/EvenOdd";
import Direct from "./components/comunication/direct/Direct";
import Indirect from "./components/comunication/indirect/Indirect";

//form
import Input from "./components/form/Input";

//counter
import Counter from "./components/counter/Counter";

const app = () => (
    <div className="App">
        <div className="Cards">

            <Card title='First' color='#1D8348'>
                <SecondParams
                    situation='student situation'
                    name='Dex'
                    grade={9.3} />
            </Card>

            <Card title='Family Members' color='#D35400'>
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

            <Card title='Even or Odd' color='#2471A3'>
                <EvenOdd number={21}/>
            </Card>

            <Card title='Direct communication' color="#45B39D">
                <Direct/>
            </Card>
            
            <Card title='Indirect communication' color="#E67E22">
                <Indirect/>
            </Card>

            <Card title='Input' color='#FF33F6'>
                <Input/>
            </Card>

            <Card title='Counter'>
                <Counter initNumber={0}></Counter>
            </Card>

        </div>
    </div>
);

export default app;