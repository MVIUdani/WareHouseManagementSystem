import React, { Component } from 'react'
import { useHistory } from "react-router-dom";

function StoreItemsCreate() {

        return (
            <div>
                <br></br>
                <h1 style={{marginLeft:"550px"}}>Add Store Items</h1>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Item Name </label>
                                            <input placeholder="Enter Item Name" 
                                                   name="itemName" 
                                                   className="form-control" 
                                                   value="" 
                                                   onChange=""
                                                   
                                                   />
                                        </div>
                                        <br></br>
                                        <button className="btn btn-success" onClick="">Save</button>
                                        <button className="btn btn-danger" onClick="" style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    
}

export default StoreItemsCreate