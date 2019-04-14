import React, { Component } from "react";
import Axios from "axios";
import Navbar from "./Navbar";
import Stickyfooter from "./Stickyfooter";
class Upcomingmeetups extends Component {
  constructor(props) {
    super(props);
    this.state = {
      upcoming_meetups: []
    };
  }
  componentDidMount() {
    Axios({
      url:
        "https://questioners-two-staging.herokuapp.com/api/meetups/upcoming/",
      method: "get"
    })
      .then(res => {
        console.log(res);
        this.setState({
          upcoming_meetups: res.data.results
        });
      })
      .catch(error => {
        if (error) {
        }
      });
  }

  render() {
    const { upcoming_meetups } = this.state;
    const upcoming_meetups_list = upcoming_meetups.length ? (
      upcoming_meetups.map(upcoming => {
        return (
          <div
            className="card text-white bg-success border-primary mb-3"
            key={upcoming.id}
          >
            <div className="card-header">Upcoming Meetups</div>
            <div className="card-body">
              <span className="card-title">Title: {upcoming.title}</span>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Body: {upcoming.body}</li>
                <li className="list-group-item">
                  Creators Name: {upcoming.creator.name}
                </li>
                <li className="list-group-item">
                  RSVP_Maybe: {upcoming.rsvp_summary.maybe}
                </li>
                <li className="list-group-item">
                  RSVP_Yes: {upcoming.rsvp_summary.yes}
                </li>
                <li className="list-group-item">
                  RSVP_No: {upcoming.rsvp_summary.no}
                </li>
                <li className="list-group-item">
                  Location: {upcoming.location}
                </li>
                <li className="list-group-item">
                  scheduled_date: {upcoming.scheduled_date}
                </li>
              </ul>
            </div>
          </div>
        );
      })
    ) : (
      <div className="alert alert-dismissible alert-danger">
        <strong>
          Oh snap There are no Upcoming meetups yet! Refresh again
        </strong>
      </div>
    );
    return (
      <div>
        <Navbar />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="container">
          <div className="row">
            <div className="offset-md-2 col-md-8 offset-md-2">
              {upcoming_meetups_list}
            </div>
          </div>
        </div>
        <Stickyfooter />
      </div>
    );
  }
}

export default Upcomingmeetups;
