import React, { Component } from 'react';
import {Link} from 'react-router-dom'

     class Page404 extends Component {
        render(){
            return(
                <div className='errorPage'>
                    <h1 className='error'>404 Not Found!</h1>
                    <p><Link to='/'>Go Back To HomePage</Link></p>
                </div>
        )
        }
    }

export default Page404;