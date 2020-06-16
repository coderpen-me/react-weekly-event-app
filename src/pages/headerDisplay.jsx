import React from 'react';
import { GoPrimitiveDot } from "react-icons/all";
import { IconContext } from "react-icons";
import ToggleButtons from '../resources/toggle-button.jsx';

class HeaderDisplay extends React.Component {

    constructor(props) {

        super(props);
        this.d = new Date();
        this.weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.month = this.months[this.d.getMonth()];
        this.year = this.d.getFullYear();
        this.date = ((this.d.getDate() < 10 ? '0' : '') + this.d.getDate());

        this.weekstart = new Date(this.props.startD);
        this.weekend = new Date(this.props.endD);
        this.weekday = this.props.weekD;
    }

    render() {
        return (
            <div>
                <section className="py-3" style={{ "background-image": "url(./static/assets/header.png)" }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col col-md-8 text-center">
                                <h2 className="text-white mb-0">
                                    {((this.d.getHours() % 12) < 10 ? '0' : '') + (this.d.getHours() % 12)}
                                    :
                            {(this.d.getMinutes() < 10 ? '0' : '') + this.d.getMinutes()}
                                    <IconContext.Provider value={{ color: "white" }}>
                                        <GoPrimitiveDot />
                                    </IconContext.Provider>
                                    {this.weekdays[this.d.getDay()]}
                                </h2>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col col-md-8 text-center">
                                <h3 className="text-white mt-0">
                                    {this.date} {this.month} {this.year}
                                </h3>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="d-flex p-2 align-items-end flex-column overlay-box">
                    <ToggleButtons>
                        Weekly
                    </ToggleButtons>
                </div>
                <div className="d-flex p-2 align-items-start flex-column overlay-box3">
                    <button className="btn-pad btn-cust" style={{"border-radius": "10px", "backgroundColor":"#fcb613", "border-color":"#fcb613"}}>{(this.weekstart.getDate()) + "/" + (this.weekstart.getMonth()) + "/" + (this.weekstart.getFullYear()) + " - " + (this.weekend.getDate()) + "/" + (this.weekend.getMonth()) + "/" + (this.weekend.getFullYear())}</button>
                </div>
                <>
                    {this.props.children}
                </>
            </div >
        )
    }
}

export default HeaderDisplay
//#fcb613