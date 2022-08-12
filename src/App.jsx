import React from "react";

//stylesheet
import './App.css'

//components import
import RandomNumber from './components/basics/First';
import SecondParams from './components/basics/Second-params';
import Card from "./components/layout/Card";

const app = () => (
    <div className="App">
        <div className="Cards">
            <Card title='First'>
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
        </div>
    </div>
);

export default app;