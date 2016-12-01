import React from 'react'

export default class TodoList extends React.Component {
		constructor(){
				super()
				this.state = {todos: [{value: 'eat toast', completed: false}]}
		}

		createTodo(task){
			let new_todo = {
				value: task,
				completed: false
			}
			this.setState({todos: this.state.todos.concat([new_todo])})
		}

		changeTodo(oldtask, newtask){
			const foundtodo = this.state.todos.find(todo => todo.value === oldtask)
			foundtodo.value = newtask
			this.setState({todos: this.state.todos})
		}

		removeTodo(task){
			console.log(task)
			let new_todos = this.state.todos.filter(todo => todo.value !== task)
			console.log(new_todos)
			this.setState({todos: new_todos})
		}


		render(){

			let tod = this.state.todos.map(todoItem => <TodoItem key={todoItem.value}
		     				 							value={todoItem.value}
											  		    complete={todoItem.completed}
												changeTodo={this.changeTodo.bind(this)}
												removeTodo={this.removeTodo.bind(this)}
														/>)
			return (<div>
					<TodoInput createTodo={this.createTodo.bind(this)}/>
					{tod}
					</div>
				   )
		}
}


class TodoItem extends React.Component {
		constructor(){
			super()
			this.state = {isEditing: false}
		}
		editTodo(){
			this.setState({isEditing: true})
		}

		cancelEdit(){
			this.setState({isEditing: false})
		}

		saveItem(){
			this.props.changeTodo(this.props.value, this.refs.edited.value)
		}

		deleteTodo(){
			this.props.removeTodo(this.props.value)
		}

		renderAction(){
				if(this.state.isEditing){
						return(
								<div>
								<input type="text"
								 defaultValue={this.props.value}
								 ref="edited"
								 />
								<button onClick={this.saveItem.bind(this)}> Save </button>
								<button onClick={this.cancelEdit.bind(this)}> Cancel </button>	
								</div>
							  )
				}

				return (
						<div>
						<div> {this.props.value} </div>
						<button onClick={this.editTodo.bind(this)}> Edit </button>
						<button onClick={this.deleteTodo.bind(this)}> Delete </button>	
						</div>
					   )

		}

		render(){
				return( <div>
						{this.renderAction()}
						</div>
					  )
		}

} 

class TodoInput extends React.Component {

		handleCreate(e){
			e.preventDefault()
			this.props.createTodo(this.refs.createInput.value)
			
		}	
		render(){	
					return (
							<form onSubmit={this.handleCreate.bind(this)}>
							<input type="text" ref="createInput"/>
							 <button>Create</button>
							 </form>
						  )

				}
}
