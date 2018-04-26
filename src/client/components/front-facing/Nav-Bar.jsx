import React, { Component } from 'react'
class NavBar extends Component {
  render () {
    return (
      <div>
        <nav className="hide-on-small-only">
          <div className="nav-wrapper blue hide-on-small-only">
            <ul id="nav-mobile" className=" hide-on-small-only quicksand ">
              <li className="spacing center-align"><a href="#members">Members</a></li>
              <li className="spacing center-align"><a className="modal-trigger" href="#email">Contact Us</a></li>
              <li className="spacing center-align"><a className="modal-trigger nowrap" href="#scheduling">Scheduling</a></li>
              <li className="spacing center-align"><a href="#location">Location</a></li>
              <li className="spacing center-align"><a href="#fee" className="modal-trigger">Fees</a></li>
            </ul>
          </div>
        </nav>

        <nav className="blue hide-on-med-and-up">
          <div className="nav-wrapper ">
            <ul id="slide-out" className="side-nav left hide-on-med-and-up">
              <li><a href="#members"><span className=" name">Members</span></a></li>
              <li><a href="#email" className="modal-trigger">Contact Us</a></li>
              <li><a href="#scheduling" className="modal-trigger"><span className=" email">Online Scheduling</span></a></li>
              <li><a href="#location">location</a></li>
              <li><a href="#fee" className="modal-trigger">Fees</a></li>
            </ul>
            <a href="#" data-activates="slide-out" className="button-collapse left "><i className="material-icons hide-on-med-and-up">menu</i></a>
          </div>
        </nav>
      </div>
    )
  }
}
export default NavBar
