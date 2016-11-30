import React from 'react'
import TodoList from ./todolist.js

export default class App extends React.Component {
		constructor(){

		}


		render(){
			return(	<div>
				     <h4> Your To do List </h4>
			 	     <TodoList />
				    </div>
				  )
		}
}
