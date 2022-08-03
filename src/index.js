//stylesheet archive import
import './index.css'

//components import
import First from './components/basics/First';

import ReacDOM from 'react-dom'
import React from 'react'

const tag = <strong>React </strong>

ReacDOM.render(
    <div>
        Hello {tag}
        <First></First>
    </div>, 
document.getElementById('root'))