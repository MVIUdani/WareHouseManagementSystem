import React, { Component } from 'react'
import { useHistory } from "react-router-dom";

function StoreItems() {
    const history = useHistory();

    function update(){
    history.push('/edit-store_items');
  }

  function add(){
    history.push('/add-store_items'); 
  }
    
        return (
            <div>
                 <h2 className="text-center">Store Items</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={add}> Add Store Item</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Item ID</th>
                                    <th> Item Name</th>
                                    <th> Action </th>
                                </tr>
                            </thead>
                            <tbody>
                               
                                        <tr>
                                             <td>1</td>   
                                             <td>Cement</td>
                                             
                                             <td>
                                                 <button style={{marginLeft: "10px"}} onClick={update} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "20px"}} onClick="" className="btn btn-danger">Delete </button>
                                            </td>
                                        </tr>

                                        <tr>
                                             <td>2</td>   
                                             <td>Nuts and Bolts</td>
                                             
                                             <td>
                                                 <button style={{marginLeft: "10px"}}onClick="" className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "20px"}} onClick="" className="btn btn-danger">Delete </button>
                                            </td>
                                        </tr>
                                    
                                        <tr>
                                             <td>3</td>   
                                             <td>Paints</td>
                                             
                                             <td>
                                                 <button style={{marginLeft: "10px"}}onClick="" className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "20px"}} onClick="" className="btn btn-danger">Delete </button>
                                            </td>
                                        </tr>

                                        <tr>
                                             <td>4</td>   
                                             <td>Plastic Rope</td>
                                             
                                             <td>
                                                 <button style={{marginLeft: "10px"}}onClick="" className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "20px"}} onClick="" className="btn btn-danger">Delete </button>
                                            </td>
                                        </tr>

                                        <tr>
                                             <td>5</td>   
                                             <td>Timber</td>
                                             
                                             <td>
                                                 <button style={{marginLeft: "10px"}}onClick="" className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "20px"}} onClick="" className="btn btn-danger">Delete </button>
                                            </td>
                                        </tr>

                                        
                                
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    
}


export default StoreItems

