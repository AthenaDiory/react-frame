import React,{Component} from 'react';
import {view as Test} from './test';

export default class App extends Component{
    render(){
        return (
            <div>
                <Test caption="test"/>
            </div>
        )
    }
}