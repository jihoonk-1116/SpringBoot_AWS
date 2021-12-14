import React from 'react';

class Todo extends React.Component{
    render(){
        return (
            <div className = "Todo">
                <input type="checkbox" id="todo0" name="todo0" value='todo0'/>
                <label for="todo0"> Create Todo Component </label>
            </div>
        );
    }
}

export default Todo;