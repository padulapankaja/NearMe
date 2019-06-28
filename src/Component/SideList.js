import React, { Component } from "react";

class SideList extends Component {
  render() {
    
    var SavedList  = this.props.SaveList.map(name=>{
          
      


      return (
              <div className="alert alert-info" key={name}>
                <a href="#" className="btn btn-xs btn-primary pull-right"> Click more info</a>
                <strong>{name}</strong>
              </div>
      )
    
      
      })
          
      
      
  
    return (
       
         <ul>  <h2>Saved Places</h2>
          {SavedList}
    </ul> 
        
    );
  }
}


export default SideList;
