import {connect} from 'react-redux'
import Counter from '../components/Counter'
import actions from '../actions/counter';

//将state.sum绑定到props的sum
const mapStateToProps = (state) => ({
    sum: state.sum
});

//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => ({
    increment: (...args) => dispatch(actions.increment(...args)),
    decrement: (...args) => dispatch(actions.decrement(...args))
});

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(mapStateToProps, mapDispatchToProps)(Counter)

