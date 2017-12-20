import React, { Component } from 'react';
import {Link} from 'react-router-dom'
// @connect(
//     state=>state.navReducer,
//     {changeSearchValue}
// )

     class NavBar extends Component {
        constructor(props){
            super(props);
            this.state = {
                searchVal:''//要搜索的内容
            }
            this.handleChangeInp =this.handleChangeInp.bind(this);
        }
        handleChangeInp(e){
            const target = e.target;
            this.setState({searchVal:target.value})
        }
        render(){
            return(
                <nav id="top" className='navBox clear'>
                    <div className='navContainer fl'>
                        <Link to='/'><img src={require('../../static/images/logo.png')} alt=''/></Link>
                        <input className='searchInp' value={this.state.searchVal} onFocus={(e)=>{e.target.classList.toggle('active')}} onChange={this.handleChangeInp} onBlur={(e)=>{e.target.classList.toggle('active')}}  type='text'  />
                    </div>
                    <div className='navContainer fr'>
                    </div>
                </nav>
        )
        }
    }

export default NavBar;