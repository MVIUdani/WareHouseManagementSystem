import React, { Component } from 'react'
import { useHistory } from "react-router-dom";

function StoreEdit() {

        return (
            <div>
                <br></br>
                <h1 style={{marginLeft:"550px"}}>Update Store</h1>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label> Store ID </label>
                                            <input placeholder="" 
                                                   name="storeID" 
                                                   className="form-control" 
                                                   value="1" 
                                                   onChange=""
                                                   
                                                   />
                                        </div>

                                        <div className = "form-group">
                                            <label> Location of Store </label>
                                            <input placeholder="Enter Store Location" 
                                                   name="storeLocation" 
                                                   className="form-control" 
                                                   value="Colombo,SriLanka" 
                                                   onChange=""
                                                   
                                                   />
                                        </div>
                                        <div className = "form-group">
                                            <label> Capacity of Store </label>
                                            <input placeholder="Enter Store Capacity" 
                                                   name="storeCapacity" 
                                                   className="form-control" 
                                                   value="2000" 
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

export default StoreEdit