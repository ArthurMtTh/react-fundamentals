import React from "react";

//stylesheet
import './App.css'

//components import
import Card from "./components/layout/Card";

import CompMember from './components/basics/CompMember'
import CompFamily from './components/basics/CompFamily'
import RandomNumber from './components/basics/First';
import SecondParams from './components/basics/SecondParams';

const app = () => (
    <div className="App">
        <div className="Cards">

            <Card title='First' color='#1D8348'>
                <SecondParams
                    situation='student situation'
                    name='Dex'
                    grade={9.3} />
            </Card>

            <Card title="Second">
                <SecondParams
                    situation='student situation'
                    name='Jill'
                    grade={6.5} />
            </Card>

            <Card title='Radom Number'>
                <RandomNumber min={1} max={99} />
            </Card>

            <Card title='Family Members'>
                <CompFamily lastName='Fergusson'>
                    <CompMember name='Karen' />
                    <CompMember name='Harry' />
                    <CompMember name='Karoline' />
                </CompFamily>
            </Card>
        </div>
    </div>
);

export default app;