import React, { Component } from 'react';

//components
import NavBar from "../components/front-facing/Nav-Bar.jsx";
import Heading from "../components/front-facing/Heading.jsx";

class Main extends Component {
  render () {
    return (
      <div>
          <NavBar/>

          {/* heading */}
          <div className="row top-span">
            <div className="col l12 m12 s12  logo-container">
              <span className="logo logo--top ">Skelly, Muchmore & Oberbillig L.L.C.</span><br/>
              <div className="seperator"></div>
              <span className="logo logo--bottom ">Mediation and Arbitration Services</span>
            </div>
        </div>

        {/* members */}
        <div className="row" id="members">
          <div className="col l6 m6 s8 offset-l3 offset-m3 offset-s2 center-align">
            <h4 className="able">Members</h4>
          </div>
        </div>

        <div className="row">
        
          {/* partner1 */}
          <div className="col m4 l4 hide-on-small-only  members">
            <div className="row">
              <div className="col s12">
                {/*<img src="<%= partners[0].img %>" alt="" className="img img-size"/> //TODO: logic to get photo, this needs to be by id */}
              </div>
            </div>
            <div className="row">
              <h5 className="center-align serif">
                {/*<%= partners[0].title %> <%= partners[0].first_name %> <%= partners[0].middle_initial %>. <%=partners[0].last_name %> //TODO: logic to get partner name, this needs to be by id */}
              </h5>
              <div className="col m12 l8 offset-l2">
                <a className="waves-effect waves-light blue darken-2 btn centerbtn" href="DYNAMIC PARTNER LINK LOGIC HERER">More</a>
              </div>
            </div>
          </div>

          {/* partner2 */}
          <div className="col m4 l4 hide-on-small-only  members">
            <div className="row">
              <div className="col s12">
                {/*<img src="<%= partners[0].img %>" alt="" className="img img-size"/> //TODO: logic to get photo, this needs to be by id */}
              </div>
            </div>
            <div className="row">
              <h5 className="center-align serif">
                {/*<%= partners[0].title %> <%= partners[0].first_name %> <%= partners[0].middle_initial %>. <%=partners[0].last_name %> //TODO: logic to get partner name, this needs to be by id */}
              </h5>
              <div className="col m12 l8 offset-l2">
                <a className="waves-effect waves-light blue darken-2 btn centerbtn" href="DYNAMIC PARTNER LINK LOGIC HERER">More</a>
              </div>
            </div>
          </div>

          {/* partner3 */}
          <div className="col m4 l4 hide-on-small-only members  ">
            <div className="row">
              <div className="col s12">
                {/*<img src="<%= partners[0].img %>" alt="" className="img img-size"/> //TODO: logic to get photo, this needs to be by id */}
              </div>
            </div>
            <div className="row">
              <h5 className="center-align serif">
                {/*<%= partners[0].title %> <%= partners[0].first_name %> <%= partners[0].middle_initial %>. <%=partners[0].last_name %> //TODO: logic to get partner name, this needs to be by id */}
              </h5>
              <div className="col m12 l8 offset-l2">
                <a className="waves-effect waves-light blue darken-2 btn centerbtn" href="DYNAMIC PARTNER LINK LOGIC HERER">More</a>
              </div>
            </div>
          </div>

          {/* partners small only */}
          <div className="col s12">
            <a href="DYNAMIC PARTNER LINK LOGIC HERER" className="btn blue darken-2 hide-on-med-and-up members--small">{/* logic for member names needs to be by id to inusre proper loading order each time */}</a>
          </div>
          
          <div className="col s12">
            <a href="DYNAMIC PARTNER LINK LOGIC HERER" className="btn blue darken-2 hide-on-med-and-up  members--small">{/* logic for member names needs to be by id to inusre proper loading order each time */}</a>
          </div>

          <div className="col s12">
            <a href="DYNAMIC PARTNER LINK LOGIC HERER" className="btn blue darken-2 hide-on-med-and-up  members--small">{/* logic for member names needs to be by id to inusre proper loading order each time */}</a>
          </div>
        
        </div>

        {/* clickables */}

        {/* contact us */}
        <div className="row bottom-row">
          <div className="col s12 m6 l6 icons-border ">
            <a className="modal-trigger" href="#email"><i className="material-icons large blue-text scale-pad-top" >mail</i></a>
            <h4 className="center-align scale-pad-bottom">Contact us</h4>
          </div>

          {/* scheduling */}
          <div className="col s12 m6 l6 icons-border">
            <a className="modal-trigger" href="#scheduling"><i className="material-icons large blue-text scale-pad-top">date_range</i></a>
            <h4 className="center-align scale-pad-bottom">Online Scheduling</h4>
          </div>


          {/* location */}
          <div className="col s12 m12 l12 icons-border">
            <i className="material-icons large blue-text" id="location">location_on</i>
            <h4 className="center-align">Location</h4>
            <p className="center-align">1313 E. Osborn Road #120, Phoenix, Arizona 85014</p>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m12 l12" id="map">

          </div>
        </div>

        <div className="row ">
          <div className="col s12">

          <h4 className="center-align quicksand" id="cases">Case Experience</h4>
          <div className="row">
            <div className="col s4  ">
              <p className="center-align">ADA Disability</p>
              <p className="center-align">Agricultural</p>
              <p className="center-align">Anti-Trust</p>
              <p className="center-align">Appellate</p>
              <p className="center-align">Automotive</p>
              <p className="center-align">Aviation</p>
              <p className="center-align">Banking & Finance</p>
              <p className="center-align">Civil Rights</p>
              <p className="center-align">Class Actions</p>
              <p className="center-align">Commercial/Business</p>
              <p className="center-align">Community Associations</p>
              <p className="center-align">Construction</p>
              <p className="center-align">Consumer Fraud</p>
              <p className="center-align">Contract Disputes</p>
              <p className="center-align">EEOC</p>
              <p className="center-align">Eminent Domain</p>
              <p className="center-align">Employment</p>
              <p className="center-align">Engineering</p>
              <p className="center-align">Environmental</p>
              <p className="center-align">Family Businesses</p>
              <p className="center-align">Franchise</p>
            </div>
            <div className="col s4 ">
              <p className="center-align">Health Care</p>
              <p className="center-align">Industrial</p>
              <p className="center-align">Insurance</p>
              <p className="center-align">Intellectual Property</p>
              <p className="center-align">International</p>
              <p className="center-align">Landlord/Tenant	</p>
              <p className="center-align">Legal Malpractice</p>
              <p className="center-align">Lemon Law</p>
              <p className="center-align">Libel & Slander</p>
              <p className="center-align">Local Government	</p>
              <p className="center-align">Media & Communications</p>
              <p className="center-align">Medical Malpractice	</p>
              <p className="center-align">Mergers & Acquisitions</p>
              <p className="center-align">Native American</p>
              <p className="center-align">Natural Disasters</p>
              <p className="center-align">Non-profit Organizations</p>
              <p className="center-align">Nursing Homes</p>
              <p className="center-align">Partnerships</p>
              <p className="center-align">Personal Injury</p>
              <p className="center-align">Pharmaceuticals</p>
              <p className="center-align">Police</p>
            </div>
            <div className="col s4 ">
              <p className="center-align">Premises Liability</p>
              <p className="center-align">Probate</p>
              <p className="center-align">Product Liability</p>
              <p className="center-align">Professional Fees</p>
              <p className="center-align">Professional Liability</p>
              <p className="center-align">Professional Malpractice</p>
              <p className="center-align">Professional Negligence</p>
              <p className="center-align">Real Estate</p>
              <p className="center-align">Religious Institutions</p>
              <p className="center-align">Securities</p>
              <p className="center-align">Shareholder Disputes</p>
              <p className="center-align">Software</p>
              <p className="center-align">Sports</p>
              <p className="center-align">Technology</p>
              <p className="center-align">Title Disputes</p>
              <p className="center-align">Torts</p>
              <p className="center-align">Transportation</p>
              <p className="center-align">Trusts / Estates</p>
              <p className="center-align">Utilities</p>
              <p className="center-align">Workers' Compensation</p>
              <p className="center-align">Wrongful Death</p>
            </div>
          </div>
          </div>
        </div>


      </div>
    )
  }
}
export default Main;
