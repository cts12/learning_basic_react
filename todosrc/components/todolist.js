import React from 'react'

export default TodoList extends React.Component {
		constructor(){
				super()
				this.state = {todos: []}
		}

		update(e){
			let new_todo = {
				value: e.target.value,
				completed: false
			}
			this.setState({todos: this.state.todos.concat([]})
		}

		render(){
				return (
						<TodoInput update={this.update.bind(this)}/>
						{this.state.todos.map(todoItem => <TodoItem key={todoItem.name}
										 							value={todoItem.value}
																	complete=todoItem.completed/>)}
					   )
		}


}

TodoInput extends React.Component {

		handleSubmit(e){

		}
		
		
		render(){  return (<form onSubmit={this.handlSubmit}>
							<input type="text">
							 <input type="submit">Add Task</button>
							 </form>
							)

				}
}


class TodoItem extends React.Component {
		constructor(){
				super()
				this.state = {

				}
		}


		componentWillUnmount(e){

		}
		
		render(){
				return( <div>
						<div> this.props.value </div>
						<button onClick={this.componentWillUnmount.bind(this)}>
						</div>
					  )
		}

} 

TodoItem.defaultProps = {
		color="red"
		completed = false
}
