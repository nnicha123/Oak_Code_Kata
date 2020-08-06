import React, { Component } from 'react'
import './FormContainer.css'
export class FormContainer extends Component {
  state = {
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    destination: '',
    nutsFree: '',
    lactoseFree: '',
    vegan: ''
  }
  render() {
    return (
      <div>
        <header>Sample form</header>
        <form>
          <div className="inputGroup">
            <input type="text" value={this.state.firstName} onChange={(e) => this.setState({ firstName: e.target.value })} placeholder="First Name" />
            <input type="text" value={this.state.lastName} onChange={(e) => this.setState({ lastName: e.target.value })} placeholder="Last Name" />
            <input type="text" value={this.state.age} onChange={(e) => this.setState({ age: e.target.value })} placeholder="Age" />
          </div>
          <div className="radioGroup">
            <label><input class="radiobutton" type="radio" name="gender" value="male" />Male</label>
            <label><input class="radiobutton" type="radio" name="gender" value="female" />Female</label>
          </div>
          <div className="destination">
            <div><b>Select your destination</b></div>
            <select class="destination-input" name="destination"><option value="">-- Please Choose a destination --</option><option value="Thailand">Thailand</option><option value="Japan">Japan</option><option value="Brazil">Brazil</option></select>
          </div>

          <div class="restrictions">
            <div><b>Dietary restrictions:</b></div>
            <input type="checkbox" name="nutsFree" /><span>Nuts free</span>
            <br />
            <input type="checkbox" name="lactoseFree" /><span>Lactose free</span>
            <br />
            <input type="checkbox" name="isVegan" /><span>Vegan</span>
          </div>
          <button>Submit</button>
        </form>
        <hr />
        <div className="enteredInfo">
          <h2>Entered Information:</h2>
          <p>Your name: {this.state.firstName} {this.state.lastName}</p>
          <p>Your age: {this.state.age}</p>
          <p>Your gender: </p>
          <p>Your destination:</p>
          <p>Your dietary restrictions:</p>
          <div>
            **Nuts free :
            <br />
            **Lactose free :
            <br />
            **Vegan meal :
          </div>
        </div>
      </div >
    )
  }
}

export default FormContainer
