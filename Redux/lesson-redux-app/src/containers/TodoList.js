import { connect } from 'react-redux'
// Actionとして定義した、toggleTodoをimportします。
import { toggleTodo } from '../actions'
// stateとdispatchメソッドを渡す先であるコンポーネントをimportします。
import TodoList from '../components/TodoList'

// これは、stateをコンポーネントに渡すための準備です。
// 「todos」という名前でstateを渡します。
const mapStateToProps = state => ({
  todos: state
})

// これは、Dispatchメソッドをコンポーネントに渡すための準備です。
// toggleTodo という関数を渡します。
// この関数は、Todo の id のみの情報を必要としています。
const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

// 上で定義した todos と toggleTodo を TodoList コンポーネントに渡しています。
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
