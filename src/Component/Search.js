import React, { Component } from "react";
import axios from 'axios';

class Search extends Component {

getKey(e){
    e.preventDefault();
    const KeyType = this.refs.inputPlace.value;
    const update = this.props;
    
    axios.post('http://localhost:3001/getLocation', {
        city : KeyType,
      })
      .then(function (response) {
        console.log(response);
         update.callUpdate(response.data.data);
        
      })
      .catch(function (error) {
        console.log(error);
      });
}



  render() {
   
    return (
      <form className="form-horizontal">
        <fieldset>
          <legend>Search</legend>
          <div className="col-md-10">
            <div className="from-group">
              <label htmlFor="inputEmail" className="col-lg control-lable"> Place</label>
              <div className="col-lg-10">
                <input type="text"  className="form-control" id="search" placeholder="Search" ref="inputPlace" />
              </div>
            </div>
          </div>
          <div className="col-md-2">
              
            <button className="btn btn-primary" onClick={this.getKey.bind(this)}> Click</button>
          </div>
        </fieldset>
      </form>
    );
  }
}

export default Search;
