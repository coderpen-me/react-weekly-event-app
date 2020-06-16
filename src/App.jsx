import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './css/coderpen.css';

import { Route, BrowserRouter as Router } from "react-router-dom";
import React, { Component } from 'react';

import AppHeader from './pages/header.jsx';
import HeaderDisplay from './pages/headerDisplay';
import Footers09 from './pages/footer';
import LayoutDraw from './pages/layout';

var CLIENT_ID = '359885176620-2sofa253qick5c36icm3fr5mh03scpdt.apps.googleusercontent.com';
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
var SCOPES = "https://www.googleapis.com/auth/calendar";

class App extends Component {

  constructor(props) {

    super(props);

    this.state = {
      showAuthButton: false,
      showSignOutButton: false,
      eventsList: [],
      lists: [],
    };
    this.initClient = this.initClient.bind(this);
    this.updateSigninStatus = this.updateSigninStatus.bind(this);
    this.authButton = <button id="authorize-button" style={{ "backgroundColor": '#fcb613', "margin": 'auto', "display": 'block' }} className="btn center-overlay btn-primary btn-sm" onClick={this.handleAuthClick.bind(this)}>Authorize</button>
    this.signOutButton = <button id="signout-button" style={{ "backgroundColor": '#fcb613', "margin": 'auto', "display": 'block' }} className="btn center-overlay btn-primary btn-sm" onClick={this.handleSignoutClick.bind(this)}>Sign Out</button>

  }
  handleAuthClick() {
    window.gapi.auth2.getAuthInstance().signIn();
  }
  handleSignoutClick() {
    window.gapi.auth2.getAuthInstance().signOut();
  }
  handleClientLoad() {
    window.gapi.load('client:auth2', this.initClient);
  }
  updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
      this.setState({
        showAuthButton: false,
        showSignOutButton: true
      })
      //listUpcomingEvents();
      //insertNewEvent();
    } else {
      this.setState({
        showAuthButton: true,
        showSignOutButton: false
      })
    }
  }

  listUpcomingEvents() {
    window.gapi.client.calendar.events.list({
      'calendarId': 'primary',
      'showDeleted': false,
      'singleEvents': true,
      'timeMin': this.startMili.toISOString(),
      'timeMax': this.endMili.toISOString(),
      'orderBy': 'startTime',
    }).then((response) => {
      var events = response.result.items;
      if (events.length > 0) {
        for (var i = 0; i < events.length; i++) {
          var event = events[i];
          const obj = {
            'summary': event.summary,
            'start': event.start,
            'end': event.end,
          }
          this.setState((prev) => ({
            eventsList: prev.eventsList.concat(obj)
          }))
          //this.state.eventsList.push(obj);
          //this.appendPre(event.summary + ' (' + when + ')')
        }
      }
      this.setState(() => ({
        lists: this.getList()
      }))
    });
  }

  getList() {
    return this.state.eventsList.map((ev) => {
      return <div key="">{ev.summary}</div>
    })
  }

  initClient() {
    window.gapi.client.init({
      discoveryDocs: DISCOVERY_DOCS,
      clientId: CLIENT_ID,
      scope: SCOPES
    }).then(() => {
      //console.log(window.window.gapi);
      window.window.gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus);
      this.updateSigninStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get());
      this.listUpcomingEvents();
    });
  }

  getWeek(d) {
    this.d = d;
    this.weekday = d.getDay();
    this.startMili = new Date(d.getTime() - (this.weekday * 86400000));
    this.endMili = new Date(d.getTime() + ((6 - this.weekday) * 86400000));
    //console.log(this.startMili, this.endMili);
  }

  componentDidMount() {
    this.handleClientLoad();
    this.getWeek(new Date());
  }

  render() {
    //console.log(this.state.lists)
    return (
      <Router>
        <div style={{ backgroundColor: '#f3f2f1' }}>
          <Route exact path="/" component={AppHeader} />
          <Route exact path="/" component={() =>
            <HeaderDisplay startD={this.startMili} endD={this.endMili} weekD={this.weekday}>
              <div className="overlay-box2">
                {this.state.showAuthButton ? this.authButton : null}
                {this.state.showSignOutButton ? this.signOutButton : null}
              </div>
            </HeaderDisplay>
          }>
          </Route>
          <Route exact path="/" component={() =>
            <LayoutDraw eventsList={this.state.eventsList} startD={this.startMili} endD={this.endMili} weekD={this.weekday}>
            </LayoutDraw>} />
          <Route exact path="/" component={Footers09} />
        </div>
      </Router>
    );
  }
}
export default App;