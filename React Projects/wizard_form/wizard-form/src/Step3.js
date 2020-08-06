import React from 'react';

export default function Step1(props){
    if(props.currentStep !== 3){
        return null;
    }
    return(
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
            className="form-control"
            id="password"
            name="password"
            type="text"
            placeholder="Enter password"
            value={props.password}
            onChange={props.handleChange}
            />
            <button type="submit">Submit</button>
        </div>
    )
}
