// 型定義機能を提供する PropTypes を import します。
import PropTypes from 'prop-types'

import Todo from './Todo'

// TodoList Component には、TodoList Container で定義した
// todos と toggleTodo が渡されています。
const TodoList = ({ todos, toggleTodo }) => (
    <ul>
      {todos.map(todo =>
        // ここで Todo コンポーネントを描画します。
        // onClick には、toggleTodo（引数は todo の id）を渡します。
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => toggleTodo(todo.id)}
        />
      )}
    </ul>
  )

// 下記では、TodoList Component に渡される引数（propsといいます）について
// 「データ型」・「必須か否か」を定義しています。
// データ型は記述の通りで、全ての値を必須としています。
TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList
