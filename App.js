import React from 'react'
import ReactDOM from 'react-dom'








/*
class App extends React.Component {
		constructor(){
				super()
				this.state = {
						red: 0,
				}
		this.update = this.update.bind(this)
		}
		update(){
				this.setState({
						red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value
				})
		}
		render(){
				return(
						<div>
						  <NumInput ref="red" 
						  min={0}
						  max={255}
						  step={1}
						  //~coerces into number
						  val={+this.state.red}
						  type="number"
						  label="Red"
						  update={this.update} />
						  <br />
						</div>
					  )
		}

}

class NumInput extends React.Component {
		render() {
				let label = this.props.label !== '' ?
						<label>{this.props.label} - {this.props.val} </label> : ''
				return (
						<div>
						  <input ref="inp" 
						   type={this.props.type}
						   min={this.props.min}
						   max={this.props.max}
						   step={this.props.step}
						   defaultValue={this.props.val}
						   onChange={this.props.update} />
						   {label}
						</div>
					   )
		}
}

NumInput.propTypes = {
	min: React.PropTypes.number,
	max: React.PropTypes.number,
	step: React.PropTypes.number,
	val: React.PropTypes.number,
	label: React.PropTypes.string,
	update: React.PropTypes.func.isRequired,
	type: React.PropTypes.oneOf(['number', 'range'])
}

NumInput.defaultProps = {
 min: 0,
 max: 1,
 step: 1,
 val: 0,
 label: '',
 type: 'range'
}


/*
class App extends React.Component {
		render(){
				return (
							<Buttons>
							  <button value="A">A</button>
							  <button value="B">B</button>
							  <button value="C">C</button>
							</Buttons>
					   )
		}
}

class Buttons extends React.Component {
		constructor(){
				super()
				this.state = {selected: 'None'}
		}
		selectItem(selected){
				this.setState({selected})
		}
		update(e){
				this.setState({e.target.value})
		}
		render(){
				//We can overwrite child elements by cloning them and adding props
				//however i do think this defeats the purpose somewhat...i dunno.
				let fn = child =>
						React.clondeElement(child, {
							onClick: this.selectItem.bind(this, child.props.value)
						})
				let items = React.Children.map(this.props.children, fn)
						return (
								  <div>
									<h2> You have Selected: {this.state.selected}</h2>
									{items}
								  </div>
							   )
		}
}



/*
 * Messing around with React.Children fucntions

class App extends React.Component {
		render(){
				return (<Parent>
						<div className="childA"></div>
						</Parent>
					   )
		}
}

class Parent extends React.Component {
		render(){
				//let items = React.Children.map(this.props.children, child => child)
				//let items = React.Children.toArray(this.props.children)
				let items = React.Children.forEach(this.props.children, child => console.log(child.props.className))
				console.log(items)
				return null
		}
}








/*
import 'App.css'
class App extends React.Component {
		constructor(){
				//Constructor sets up the state
				super()
				this.state = {
					input: 'add your jsx here',
					output: '',
					err: ''
				}
		}
		update(e){
				//Once again the interactive part lies in the update function
				//Where we execute something and update the state depending on actions
				let code = e.target.value
				try
				{
					this.setState({
						output: window
								.Babel
								.transform(code, {presets: ['es2015', 'react']})
								.code,
						err: ''
					})
				}
				catch(err){
					this.setState({err: err.message})
				}
		}


		render(){
				//Render is simply used for showing state and binding to other functions
			return (
					<div>
						<header>{this.state.err}</header>
						<div className="container">
							<textarea
							onChange={this.update.bind(this)}
							defaultValue={this.state.input}/>
							<pre>
								{this.state.output}
							</pre>
						</div>
					</div>	
				   )
		}
}


/*
const HOC = (InnerComponent) => class extends React.Component {
		constructor(){
				super()
				this.state = {count: 0}
		}
		update(){
			this.setState({count: this.state.count + 1})
		}
		componentWillMount(){
				console.log('will mount')
		}
		render(){
				return (
						<InnerComponent
							{...this.props}
							{...this.state}
							update={this.update.bind(this)}
						/>
					   )
		}
}

*/
/*
class App extends React.Component {
		render(){
			return (
					<div>
					  <Button onClick={this.update}>button</Button>
					  <hr/>
					  <LabelHOC> label</LabelHOC>
					  </div>
				   )
		}
}

const Button = HOC((props) => <button onClick={props.update}>{props.children} - {props.count}</button>)

class Label extends React.Component {
		componentWillMount(){
			console.log('label will mount')
		}
		render(){
				return(
						<label onMouseMove={this.props.update}>{this.props.children} - {this.props.count}</label>		
					  )
		}
}

const LabelHOC = HOC(Label)
*/

/*
class App extends React.Component {
		constructor(){
				super();
				this.state = {items: []}
		}
		componentWillMount(){
				fetch('http://swapi.co/api/people/?format=json')
				.then(response => response.json())
				.then( ({results: items}) => this.setState({items}))
		}
		filter(e){
				this.setState({filter: e.target.value})
		}
		render(){
				let items = this.state.items
				if(this.state.filter){
						items = items.filter(item =>
										      item.name.toLowerCase()
							                  .includes(this.state.filter.toLowerCase()))
				}
				return (
					<div>
						<input type="text" onChange={this.filter.bind(this)}/>
						{items.map(item => <Person key={item.name} person={item} />)}
					</div>
					   )
		}
}

const Person = (props) => <h4> {props.person.name} </h4>


/*
class App extends React.Component {
		constructor(){
				super();
				this.state = {increasing: false}
		}
		update(){
				ReactDOM.render(<App val={this.props.val+1} />,
				document.getElementById('app'))
		}
		componentWillReceiveProps(nextProps){
			this.setState({increasing: nextProps.val > this.props.val})
		}
		shouldComponentUpdate(nextProps, nextState){
			return nextProps.val % 5 === 0;
		}
		render(){
				console.log(this.state.increasing)
				return (
						<button onClick={this.update.bind(this)}>
						{this.props.val}
						</button>
					   )
		}
}

App.defaultProps = {val: 0}

/*
class App extends React.Component {
		constructor() {
				super();
				this.state = {val: 0}
				this.update = this.update.bind(this)
		}
		update(){
				this.setState({val: this.state.val + 1})
		}
		componentWillMount(){
				//Can intetcept the state before it mounts
				console.log('componentWillMount');
				this.setState({m: 2})
		}
		componentDidMount(){
				//usd for basically setting processes
				console.log('componentDidMount')
				this.inc = setInterval(this.update,500)
		}
		componentWillUnmount(){
				//used for clearing up processes
				console.log('componentDidUnmount')
				clearInterval(this.inc)
		}
		render(){
				console.log('render');
				return <button onClick={this.update}>{this.state.val}
						{this.state.val * this.state.m}
					   </button>

		}
}

class Wrapper extends React.Component {
		mount(){
				ReactDOM.render(<App />, document.getElementById('a'))
		}
		unmount(){
				ReactDOM.unmountComponentAtNode(document.getElementById('a'))
		}
		render() {
			return(	<div>
					<button onClick={this.mount.bind(this)}>Mount</button>
					<button onClick={this.unmount.bind(this)}>Unmount</button>
					<div id="a"></div>
				</div>
				)
		}
}


/*
class App extends React.Component {
		constructor() {
				super();
				this.state = {a: ''}
		}
		update(e){
				this.setState({
						a: this.a.refs.input.value,
						b: this.refs.b.value
				})
		}

		render() {
				return (
						<div>
							<Input
							 ref={component => this.a = component}
							 update={this.update.bind(this)}
							 /> {this.state.a}
							 <hr />
							<input
							 ref="b"
							 type="text"
							 onChange={this.update.bind(this)}
							 /> {this.state.b}
						</div>
					   )
		}
}

class Input extends React.Component {	
		render(){
				return <div><input type="text" ref="input" onChange={this.props.update}/></div>
		}
}

*/

//class App extends React.Component {
//		constructor(){
//				super();
//				this.state = {
//						txt: 'this is the state text',
//						cat: 0
//				}
//		}
//		update(e){
//			this.setState({txt: e.target.value})
//			this.setState({cat: 5})
//		}
//		render(){
//			return( 
//					<Title text="12211212121"/>
//				)
//		}
//}

//const Title = (props) => <h1> Title: {props.text}</h1>

//Title.propTypes = {
//		text(props, propName, component){
//				if(!(propName in props)){
//						return new Error(`missing ${propName}`)
//				}
//				if(props[propName].length < 6){
//						return new Error(`${propName} was too short`)
//				}
//		}
//}

//class Heart extends React.Component {
//		render (){
//				return <span>&hearts;</span>
//		}
//}

//const App = () => <h1>Hello Stateless </h1>

export default App
