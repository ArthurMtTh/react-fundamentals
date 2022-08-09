import React from "react";

//components import
import RandomNumber from './components/basics/First';
import SecondParams from './components/basics/Second-params';

const app = () => (
    <div>
        <SecondParams
            situation='student situation'
            name='Dex'
            grade={9.3} />

        <SecondParams
            situation='student situation'
            name='Jill'
            grade={6.5} />

        <RandomNumber min={1} max={99} />
    </div>
);

export default app;