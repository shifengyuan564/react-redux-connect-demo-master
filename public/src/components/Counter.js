import React, {Component} from 'react'

export default class Counter extends Component {
    render() {
        const {increment, decrement, sum} = this.props;     //从组件的props属性中导入2个方法和1个变量
        return (
            <p>
                Clicked: {sum} times {' '}
                <button onClick={increment}>+</button> {' '}
                <button onClick={decrement}>-</button> {' '}
            </p>
        )
    }
}