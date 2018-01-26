import React, { Component } from 'react';
import Content from './Content';


class ContentContainer extends Component {
constructor(props) {
    super(props);

		this.state = {
			todos: [],
			inputValue: '',
		} 

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange (e) {
  	this.setState({
  		inputValue: e.target.value
  	})
  }	

  handleSubmit (e) {
  	e.preventDefault();

	if (!this.state.inputValue) {
	  		return;
	  	}  	
  	const newItem = {
  		text: this.state.inputValue,
  		id: Date.now()
  	}
  	this.setState (prevState => ({
  		todos: [...prevState.todos, newItem],
  		inputValue: ''
  	}))
  }

  handleDelete (id) {
  	this.setState(prevState => ({
  		todos: prevState.todos.filter(todo => todo.id !== id)
  	}))
  }	
	render() {
	return (

		<Content
	  		todos={this.state.todos}
			inputValue={this.state.inputValue}
			handleSubmit={this.handleSubmit}
			handleDelete={this.handleDelete}
			handleChange={this.handleChange}
		 />
	)
}
}

export default ContentContainer;