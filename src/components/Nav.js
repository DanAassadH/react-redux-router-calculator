import React from 'react';
import {Link} from 'react-router-dom';

function Nav()
{
    return(
        <nav className="calculator-nav">
            <ul>
                <li>
                    <Link to='/'>
                        Simplie Calculator
                    </Link>
                </li>
                <li>
                    <Link to='/list'>
                        Show Previous Calculations
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;