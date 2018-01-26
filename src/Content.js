import React from 'react';

const Content = (props) => (
			<div className="App-content">
				<form onSubmit={props.handleSubmit}>
					<input type="text" value={props.inputValue} onChange={props.handleChange} placeholder="Введите текст"/>
					<button type="submit" className="buttonSave">Save</button>
				</form>

				<ul className="todosList">

					{props.todos.length > 0 ? (
						props.todos.map((todo, index) => (
							<li key={todo.id}>
								<span className="inputTodos" >{todo.text}</span>
								<button className="deleteButton" type="button" onClick={() => 
								props.handleDelete(todo.id)}> Delete </button>
							</li>
						))
					) : <h1>Тудухи отсутствуют</h1>}
				</ul>
			</div>
	)

export default Content;
