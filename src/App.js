import React, { Component } from "react";
import "./App.css";
import Search from './Component/Search';
import ResultList from './Component/ResultList';
import SideList from './Component/SideList';

class App extends Component {


  constructor(props) {
    super(props)
    this.state = ({
      results : {},
      saved:[]
    })
  }
updateState(newPlaces){
  
  this.setState({
    results:newPlaces
  })
  }
  saveList(name){
    const places = this.state.saved.concat([name])
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <Search callUpdate = {this.updateState.bind(this)}
             />
            <ResultList  resultPlaces={this.state.results}
             saveList={this.saveList.bind(this)}/>
          </div>

          <div className="col-md-4">
            <SideList savedPlaces = {this.setState.saved} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
