import React from "react";

//components import
import RandomNumber from './components/basics/First';
import SecondParams from './components/basics/Second-params';
import Card from "./components/layout/Card";

const app = () => (
    <div>
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
);

export default app;