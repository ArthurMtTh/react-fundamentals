import React from "react";

//components import
import RandomNumber from './components/basics/First';
import SecondParams from './components/basics/Second-params';
import Fragment from './components/basics/Fragment';

const app = () => (
    <div>
        <RandomNumber/>
        <SecondParams
            situation='student situation'
            name='Dex'
            grade={9.3} />

        <SecondParams
            situation='student situation'
            name='Jill'
            grade={6.5} />

        <Fragment />
    </div>
);

export default app;