import React, { Component } from 'react'
import './FormValidation.css'

const validationRules = {
  firstName: /[a-z]{2,25}/i,
  lastName: /[a-z]{2,25}/i,
  phone: /[0-9]{10}/,
  email: /^([a-z\d\.-_]+)@([a-z\d-]+).([a-z]{2,8})(\.[a-z]{2,8})?$/

}
const testRegex = (value, regex) => {
  if (regex.test(value)) {
    // console.log("pass")
    return true
  } else {
    // console.log('fail')
    return false
  }
}
const checkValidity = (e) => {
  let name = e.target.attributes.name.value
  // console.log(name)
  let value = e.target.value
  // console.log(validationRules[name].test)
  return testRegex(value, validationRules[name])

}

export class FormValidation extends Component {
  state = {
    firstName: {
      title: '',
      validState: false
    },
    lastName: {
      title: '',
      validState: false
    },
    phone: {
      title: '',
      validState: false
    },
    email: {
      title: '',
      validState: false
    }
  }
  render() {
    return (
      <div className="formWrapper">
        <form>
          <div className="form-group">
            <label>First Name</label>
            <input type="text" name="firstName"
              onChange={(e) => {
                checkValidity(e);
                this.setState({ firstName: { title: e.target.value, validState: checkValidity(e) } })
              }} value={this.state.firstName.title} />
            {!this.state.firstName.validState && <p className="errorMsg">First Name is invalid</p>}
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="text" name="lastName" onChange={(e) => {
              checkValidity(e);
              this.setState({ lastName: { title: e.target.value, validState: checkValidity(e) } })
            }} value={this.state.lastName.title} />
            {!this.state.lastName.validState && <p className="errorMsg">Last Name is invalid</p>}
          </div>
          <div className="form-group">
            <label>Phone Name</label>
            <input type="text" name="phone" onChange={(e) => {
              checkValidity(e);
              this.setState({ phone: { title: e.target.value, validState: checkValidity(e) } })
            }} value={this.state.phone.title} />
            {!this.state.phone.validState && <p className="errorMsg">Number is invalid</p>}
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" onChange={(e) => {
              checkValidity(e);
              this.setState({ email: { title: e.target.value, validState: checkValidity(e) } })
            }} value={this.state.email.title} />
            {!this.state.email.validState && <p className="errorMsg">Email is invalid</p>}
          </div>
        </form>
      </div>
    )
  }

}

export default FormValidation
