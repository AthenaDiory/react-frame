import React,{Component} from 'react';
import {connect} from 'react-redux';
import {testFun} from './Action';


@connect(
    //你需要state当中的什么参数 取出来就会放到props相对的参数当中
    state => ({test:state.test}),
     //你需要什么action 取出来就会放到props相对的参数当中
    dispatch =>{
        return {testFun:(val) => dispatch(testFun(val))}
    }
)
class Test extends Component{
    componentDidMount(){
        const {testFun} = this.props;
        testFun('val');
    }
    render(){
        console.log(this.props.test);
        return (
            <div>
                Test page
            </div>
        )
    }
}

export default Test;