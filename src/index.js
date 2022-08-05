//stylesheet archive import
import './index.css'

import ReacDOM from 'react-dom'
import React from 'react'

//components import
import First from './components/basics/First';
import SecondParams from './components/basics/Second-params';
import Fragment from './components/basics/Fragment';

ReacDOM.render(
    <div>
        <SecondParams 
        situation='student situation' 
        name='Dex'
        grade={9.3}/>

        <SecondParams
        situation='student situation' 
        name='Jill'
        grade={6.5}/>

        <Fragment/>
    </div>, 
document.getElementById('root'))