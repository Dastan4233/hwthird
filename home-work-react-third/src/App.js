import React from "react";


class Todolist extends React.Component {
  constructor(){
    super();
    this.state= {
      item: '',
      items: []
    }
  }

  onHandler = (add) => {
    this.setState({
      item: add.target.value
    })
  }

  onAddHandler = (add) => {
    add.preventDefault();
    this.setState({
      item: '',
      items: [this.state.items, this.state.item]
    });
  }

  render() {
    return(
        <div>
          <input type="text" value={this.state.item}  placeholder="добавить задачу" onChange={this.onHandler}/>
          <button onClick={this.onAddHandler}>Добавить</button>
          {this.state.items}
        </div> 
    )
  }
}


export default Todolist;
