import React, { Component } from 'react'
import { useHistory } from "react-router-dom";

function Stock() {
    const history = useHistory();

    function update(){
    history.push('/edit-stock');
  }  

  function add(){
    history.push('/add-stock'); 
  }
        return (
            <div>
                 <h2 className="text-center">Stock List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={add}> Add Stock</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Stock ID</th>
                                    <th> Count of Stock</th>
                                    <th> Stock Date</th>
                                    <th> Item name</th>
                                    <th> Action </th>
                                </tr>
                            </thead>
                            <tbody>
                               
                                        <tr>
                                             <td>1</td>   
                                             <td>50</td>
                                             <td>2020/08/30</td>
                                             <td>Cement</td>
                                             
                                             <td>
                                                 <button style={{marginLeft: "10px"}} onClick={update} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "20px"}} onClick="" className="btn btn-danger">Delete </button>
                                            </td>
                                        </tr>

                                        <tr>
                                             <td>2</td>   
                                             <td>150</td>
                                             <td>2020/08/30</td>
                                             <td>Nuts and Bolts</td>
                                             
                                             <td>
                                                 <button style={{marginLeft: "10px"}} onClick="" className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "20px"}} onClick="" className="btn btn-danger">Delete </button>
                                            </td>
                                        </tr>
                                    
                                
                            </tbody>
                        </table>

                 </div>

            </div>
        )
 
}


export default Stock

