import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addItemToList, deleteItemFromList } from './redux/actions'

export class Todo extends Component{
    state = {
        todo: '',
        todoList:[]
    }

    handleChange = (e) => {
        this.setState({
            todo: e.target.value
        })
    }

    handleSubmit = () => {
        this.props.addItemToList(this.state.todo)
        this.setState({ todo: ''})
    }
    
    render(){
        const {todo} = this.state
        const { todoList } = this.props
        return (
            <div>
                <h2>To do List</h2>
                <div>
                    <input name="item" value={todo} onChange={this.handleChange} placeholder="Enter todo" />
                    <button onClick={this.handleSubmit}>Add to list</button>
                </div>
                <div>
                    <h4>Items</h4>
                    {todoList.map((item, idx)=> 
                        <div key={`${idx}`}>
                            <p>{item}</p>
                            <button onClick={()=> this.props.deleteItemFromList(item)}>Delete</button>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    addItemToList, 
    deleteItemFromList
}

const mapStateToProps = (state) => {
    return {
        todoList: state.todoList.data
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todo)