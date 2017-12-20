import React, { Component } from 'react';

     class BackTop extends Component {
        constructor(props){
            super(props);
            this.state ={
                show:false
            }
            this.watch = this.watch.bind(this);
        }
        watch(){
            this.setState({
                show:document.documentElement.scrollTop>window.innerHeight
            })
        }
        componentDidMount(){
            window.addEventListener('scroll',this.watch)
        }
        componentWillUnmount(){
            window.removeEventListener('scroll',this.watch)
        }
        render(){
            return(<div className={this.state.show?'back':'back none'} onClick={()=>{document.documentElement.scrollTop=0}}>回到顶部</div>)
        }
    }

export default BackTop;