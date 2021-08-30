import React, { Component } from 'react'
import { useHistory } from "react-router-dom";

function Store() {
    const history = useHistory();

    function update(){
    history.push('/edit-store');
  }

  function add(){
    history.push('/add-store'); 
  }
        return (
            <div>
                 <h2 className="text-center">Store List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={add}> Add Store</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Store ID</th>
                                    <th> Location of Store</th>
                                    <th> Capacity of Store</th>
                                    <th> Action </th>
                                </tr>
                            </thead>
                            <tbody>
                               
                                        <tr>
                                             <td>1</td>   
                                             <td>Colombo,Sri Lanka</td>
                                             <td>2000</td>

                                             <td>
                                                 <button style={{marginLeft: "10px"}}onClick={update} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "20px"}} onClick="" className="btn btn-danger">Delete </button>
                                            </td>
                                        </tr>
                                    
                                        <tr>
                                             <td>2</td>   
                                             <td>Galle,Sri Lanka</td>
                                             <td>1500</td>

                                             <td>
                                                 <button style={{marginLeft: "10px"}}onClick="" className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "20px"}} onClick="" className="btn btn-danger">Delete </button>
                                            </td>
                                        </tr>

                                        <tr>
                                             <td>3</td>   
                                             <td>Kandy,Sri Lanka</td>
                                             <td>1000</td>

                                             <td>
                                                 <button style={{marginLeft: "10px"}}onClick="" className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "20px"}} onClick="" className="btn btn-danger">Delete </button>
                                            </td>
                                        </tr>

                                        <tr>
                                             <td>4</td>   
                                             <td>Anuradhapura,Sri Lanka</td>
                                             <td>1500</td>

                                             <td>
                                                 <button style={{marginLeft: "10px"}}onClick="" className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "20px"}} onClick="" className="btn btn-danger">Delete </button>
                                            </td>
                                        </tr>

                                        <tr>
                                             <td>5</td>   
                                             <td>Jaffna,Sri Lanka</td>
                                             <td>1000</td>

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


export default Store

