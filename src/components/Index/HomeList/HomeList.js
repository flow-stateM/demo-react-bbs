import React, { Component } from 'react';
import HomeListHeader from './HomeListHeader';
import HomeListContent from './HomeListContent';
import {Route} from 'react-router-dom';


     class HomeList extends Component {
        render(){
            return(<div className='HomeList'>
                <HomeListHeader />
                <Route path='/' exact component={HomeListContent}/>
                <Route path="/good" component={HomeListContent}/>
                <Route path="/share" component={HomeListContent}/>
                <Route path="/ask" component={HomeListContent}/>
                <Route path="/job" component={HomeListContent}/>
            </div>)
        }
    }

export default HomeList;


//##文章列表区
// 1.分类标签
// 2.要获取到数据之后才加载页面
// 3.置顶和精华标签是绿底白字的
// 4.看过的文章标题是灰色的
// 5.鼠标在标题上的时候标题字加underline