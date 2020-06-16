import React from 'react'
import '../css/layout.scss'
import '../css/select-des.css'
import Event from './events'

class LayoutDraw extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            eventsList: props.eventsList,
            Sunday: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            Monday: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            Tuesday: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            Wednesday: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            Thursday: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            Friday: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            Saturday: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            freeEvents: [],
            slotst_hrs: new Date(),
            sloted_hrs: new Date(),
            we_slotst_hrs: new Date(),
            we_sloted_hrs: new Date(),
            handleAvail: true,
            we_handleAvail: true,
            refresh: true,
        }
        this.weekstart = new Date(this.props.startD);
        this.weekend = new Date(this.props.endD);
        this.weekday = this.props.weekD;

        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.handleChange3 = this.handleChange3.bind(this);
        this.handleChange4 = this.handleChange4.bind(this);
        this.handleSubmit2 = this.handleSubmit2.bind(this);

        this.state.slotst_hrs.setHours(10);
        this.state.slotst_hrs.setMinutes(30);

        this.state.sloted_hrs.setHours(16);
        this.state.sloted_hrs.setMinutes(30);

        this.state.we_slotst_hrs.setHours(10);
        this.state.we_slotst_hrs.setMinutes(30);

        this.state.we_sloted_hrs.setHours(16);
        this.state.we_sloted_hrs.setMinutes(30);

    }

    handleChange(event) {
        console.log(event.target.value);
        var st_st = event.target.value.toString();
        var st_t = st_st[0] + st_st[1];
        var st_m = st_st[3] + st_st[4];
        this.setState((prev) => ({ value: prev.slotst_hrs.setHours(st_t) }, this.setState((prev) => ({ value: prev.slotst_hrs.setMinutes(st_m) }, this.findVoids()))));
    }

    handleChange2(event) {
        //console.log(event.target.value);
        //this.setState({value: event.target.value});
        var st_st = event.target.value.toString();
        var st_t = st_st[0] + st_st[1];
        var st_m = st_st[3] + st_st[4];


        if (st_t == 24) {
            this.setState((prev) => ({ value: prev.sloted_hrs.setHours(0) }, this.setState((prev) => ({ value: prev.sloted_hrs.setMinutes(0) }, this.findVoids()))));
        }
        else {
            this.setState((prev) => ({ value: prev.sloted_hrs.setHours(st_t) }, this.setState((prev) => ({ value: prev.sloted_hrs.setMinutes(st_m) }, this.findVoids()))));
        }
    }

    handleSubmit(event) {
        //console.log(event.target);
        this.setState((prev) => ({ handleAvail: !prev.handleAvail }));
        event.preventDefault();
    }

    handleChange3(event) {
        console.log(event.target.value);
        var st_st = event.target.value.toString();
        var st_t = st_st[0] + st_st[1];
        var st_m = st_st[3] + st_st[4];
        this.setState((prev) => ({ value: prev.we_slotst_hrs.setHours(st_t) }, this.setState((prev) => ({ value: prev.we_slotst_hrs.setMinutes(st_m) }, this.findVoids()))));
    }

    handleChange4(event) {
        //console.log(event.target.value);
        //this.setState({value: event.target.value});

        var st_st = event.target.value.toString();
        var st_t = st_st[0] + st_st[1];
        var st_m = st_st[3] + st_st[4];

        console.log(st_t, st_m);

        if (st_t == 24) {
            this.setState((prev) => ({ value: prev.we_sloted_hrs.setHours(0) }, this.setState((prev) => ({ value: prev.we_sloted_hrs.setMinutes(0) }, this.findVoids()))));
        }
        else {
            this.setState((prev) => ({ value: prev.we_sloted_hrs.setHours(st_t) }, this.setState((prev) => ({ value: prev.we_sloted_hrs.setMinutes(st_m) }, this.findVoids()))));
        }
    }

    handleSubmit2(event) {
        //console.log(event.target);
        this.setState((prev) => ({ we_handleAvail: !prev.we_handleAvail }));
        event.preventDefault();
    }

    getList() {
        return this.state.eventsList.map((ev) => {
            var st_ds = new Date(ev.start.dateTime);
            var ed_ds = new Date(ev.end.dateTime);
            var weekday = st_ds.getDay();
            var st_hrs = st_ds.getHours();
            var st_min = st_ds.getMinutes();
            var ed_hrs = ed_ds.getHours();
            var ed_min = ed_ds.getMinutes();

            var mapping = {
                "0": 1,
                "1": 3,
                "2": 5,
                "3": 7,
                "4": 9,
                "5": 11,
                "6": 13,
                "7": 15,
                "8": 17,
                "9": 19,
                "10": 21,
                "11": 23,
                "12": 25,
                "13": 27,
                "14": 29,
                "15": 31,
                "16": 33,
                "17": 35,
                "18": 37,
                "19": 39,
                "20": 41,
                "21": 43,
                "22": 45,
                "23": 47,
            }
            var st_grid_row = (st_min == 30) ? (mapping[st_hrs.toString()] + 1) : (mapping[st_hrs.toString()]);
            var diff = ((ed_hrs - st_hrs) * 2) + (ed_min - st_min) / 30;
            var i;
            if (weekday == 0) {
                let new_state = Object.assign({}, this.state);
                let a = new_state.Sunday;
                for (i = st_grid_row; i < (st_grid_row + diff); i++) {
                    a[i] = 1;
                }
                this.setState({ Sunday: a });
            }
            if (weekday == 1) {
                let new_state = Object.assign({}, this.state);
                let a = new_state.Monday;
                for (i = st_grid_row; i < (st_grid_row + diff); i++) {
                    a[i] = 1;
                }
                this.setState({ Monday: a });
            }
            if (weekday == 2) {
                let new_state = Object.assign({}, this.state);
                let a = new_state.Tuesday;
                for (i = st_grid_row; i < (st_grid_row + diff); i++) {
                    a[i] = 1;
                }
                this.setState({ Tuesday: a });
            }
            if (weekday == 3) {
                let new_state = Object.assign({}, this.state);
                let a = new_state.Wednesday;
                for (i = st_grid_row; i < (st_grid_row + diff); i++) {
                    a[i] = 1;
                }
                this.setState({ Wednesday: a });
            }
            if (weekday == 4) {
                let new_state = Object.assign({}, this.state);
                let a = new_state.Thursday;
                for (i = st_grid_row; i < (st_grid_row + diff); i++) {
                    a[i] = 1;
                }
                this.setState({ Thursday: a });
            }
            if (weekday == 5) {
                let new_state = Object.assign({}, this.state);
                let a = new_state.Friday;
                for (i = st_grid_row; i < (st_grid_row + diff); i++) {
                    a[i] = 1;
                }
                this.setState({ Friday: a });
            }
            if (weekday == 6) {
                let new_state = Object.assign({}, this.state);
                let a = new_state.Saturday;
                for (i = st_grid_row; i < (st_grid_row + diff); i++) {
                    a[i] = 1;
                }
                this.setState({ Saturday: a });
            }
        })
    }

    findVoids() {
        //console.log(this.state.freeEvents);
        var temp = [];
        for (var i = 0; i <= 6; i++) {

            var st_ds = this.state.slotst_hrs;
            var ed_ds = this.state.sloted_hrs;

            var we_st_ds = this.state.we_slotst_hrs;
            var we_ed_ds = this.state.we_sloted_hrs;

            var st_hrs = st_ds.getHours();
            var st_min = st_ds.getMinutes();
            var ed_hrs = ed_ds.getHours();
            var ed_min = ed_ds.getMinutes();

            var we_st_hrs = we_st_ds.getHours();
            var we_st_min = we_st_ds.getMinutes();
            var we_ed_hrs = we_ed_ds.getHours();
            var we_ed_min = we_ed_ds.getMinutes();

            //console.log(st_hrs, st_min, ed_hrs, ed_min);


            var mapping = {
                "0": 1,
                "1": 3,
                "2": 5,
                "3": 7,
                "4": 9,
                "5": 11,
                "6": 13,
                "7": 15,
                "8": 17,
                "9": 19,
                "10": 21,
                "11": 23,
                "12": 25,
                "13": 27,
                "14": 29,
                "15": 31,
                "16": 33,
                "17": 35,
                "18": 37,
                "19": 39,
                "20": 41,
                "21": 43,
                "22": 45,
                "23": 47,
            }
            var st_grid_new = (st_min == 30) ? (mapping[st_hrs.toString()] + 1) : (mapping[st_hrs.toString()]);
            var diff_new = ((ed_hrs - st_hrs) * 2) + (ed_min - st_min) / 30;

            var we_st_grid_new = (we_st_min == 30) ? (mapping[we_st_hrs.toString()] + 1) : (mapping[we_st_hrs.toString()]);
            var we_diff_new = ((we_ed_hrs - we_st_hrs) * 2) + (we_ed_min - we_st_min) / 30;
            //console.log(st_grid_new, diff_new);

            if ((i == 0 || i == 6) && we_ed_hrs == 0) {
                if (i == 0) {
                    var start_now = we_st_grid_new;
                    for (var j = we_st_grid_new; j <= (48); j++) {
                        if (j == (48) && this.state.Sunday[j] == 0) {
                            if (j - start_now > 0 && this.state.Sunday[start_now] != 1) {
                                //console.log("Pushing0", start_now, j);
                                temp.push([i, start_now, j + 1])
                            }
                            if (j - start_now > 0 && this.state.Sunday[start_now] == 1) {
                                //console.log("Pushing2", start_now, j);
                                temp.push([i, start_now + 1, j + 1])
                            }
                        }
                        if (this.state.Sunday[j] == 1) {
                            if (j - start_now > 0 && this.state.Sunday[start_now] != 1) {
                                //console.log("Pushing1", start_now, j);
                                temp.push([i, start_now, j])
                            }
                            start_now = j;
                        }
                        else {
                            if (this.state.Sunday[start_now] == 1) {
                                start_now++;
                            }
                        }
                    }
                }
                if (i == 6) {
                    //console.log("Yeah");
                    start_now = we_st_grid_new;
                    for (j = we_st_grid_new; j <= (48); j++) {
                        //console.log(j);
                        if (j == (48) && this.state.Saturday[j] == 0) {
                            //console.log("CAME");
                            if (j - start_now > 0 && this.state.Saturday[start_now] != 1) {
                                //console.log("Pushing", start_now, j);
                                temp.push([i, start_now, j + 1])
                            }
                            if (j - start_now > 0 && this.state.Saturday[start_now] == 1) {
                                //console.log("Pushing0", start_now, j);
                                temp.push([i, start_now + 1, j + 1])
                            }
                        }
                        if (this.state.Saturday[j] == 1) {
                            if (j - start_now > 0 && this.state.Saturday[start_now] != 1) {
                                //console.log("Pushing", start_now, j);
                                temp.push([i, start_now, j])
                            }
                            start_now = j;
                        }
                        else {
                            if (this.state.Saturday[start_now] == 1) {
                                start_now++;
                            }
                        }
                    }
                }
            }
            else if ((i == 1 || i == 2 || i == 3 || i == 4 || i == 5) && ed_hrs == 0) {
                if (i == 1) {
                    //console.log("WOW")
                    start_now = st_grid_new;
                    for (j = st_grid_new; j < (49); j++) {
                        if (j == (48) && this.state.Monday[j] == 0) {
                            if (j - start_now > 0 && this.state.Monday[start_now] != 1) {
                                //console.log("Pushing", start_now, j);
                                temp.push([i, start_now, j + 1])
                            }
                            if (j - start_now > 0 && this.state.Monday[start_now] == 1) {
                                //console.log("Pushing0", start_now, j);
                                temp.push([i, start_now + 1, j + 1])
                            }
                        }
                        if (this.state.Monday[j] == 1) {
                            if (j - start_now > 0 && this.state.Monday[start_now] != 1) {
                                //console.log("Pushing", start_now, j);
                                temp.push([i, start_now, j])
                            }
                            start_now = j;
                        }
                        else {
                            if (this.state.Monday[start_now] == 1) {
                                start_now++;
                            }
                        }
                    }
                }
                if (i == 2) {
                    //console.log("WOW")
                    start_now = st_grid_new;
                    for (j = st_grid_new; j < (49); j++) {
                        if (j == (48) && this.state.Tuesday[j] == 0) {
                            if (j - start_now > 0 && this.state.Tuesday[start_now] != 1) {
                                //console.log("Pushing", start_now, j);
                                temp.push([i, start_now, j + 1])
                            }
                            if (j - start_now > 0 && this.state.Tuesday[start_now] == 1) {
                                //console.log("Pushing0", start_now, j);
                                temp.push([i, start_now + 1, j + 1])
                            }
                        }
                        if (this.state.Tuesday[j] == 1) {
                            if (j - start_now > 0 && this.state.Tuesday[start_now] != 1) {
                                //console.log("Pushing", start_now, j);
                                temp.push([i, start_now, j])
                            }
                            start_now = j;
                        }
                        else {
                            if (this.state.Tuesday[start_now] == 1) {
                                start_now++;
                            }
                        }
                    }
                }
                if (i == 3) {
                    start_now = st_grid_new;
                    for (j = st_grid_new; j < (49); j++) {
                        if (j == (48) && this.state.Wednesday[j] == 0) {
                            if (j - start_now > 0 && this.state.Wednesday[start_now] != 1) {
                                //console.log("Pushing", start_now, j);
                                temp.push([i, start_now, j + 1])
                            }
                            if (j - start_now > 0 && this.state.Wednesday[start_now] == 1) {
                                //console.log("Pushing0", start_now, j);
                                temp.push([i, start_now + 1, j + 1])
                            }
                        }
                        if (this.state.Wednesday[j] == 1) {
                            if (j - start_now > 0 && this.state.Wednesday[start_now] != 1) {
                                //console.log("Pushing", start_now, j);
                                temp.push([i, start_now, j])
                            }
                            start_now = j;
                        }
                        else {
                            if (this.state.Wednesday[start_now] == 1) {
                                start_now++;
                            }
                        }
                    }
                }
                if (i == 4) {
                    start_now = st_grid_new;
                    for (j = st_grid_new; j < (49); j++) {
                        if (j == (48) && this.state.Thursday[j] == 0) {
                            if (j - start_now > 0 && this.state.Thursday[start_now] != 1) {
                                //console.log("Pushing", start_now, j);
                                temp.push([i, start_now, j + 1])
                            }
                            if (j - start_now > 0 && this.state.Thursday[start_now] == 1) {
                                //console.log("Pushing0", start_now, j);
                                temp.push([i, start_now + 1, j + 1])
                            }
                        }
                        if (this.state.Thursday[j] == 1) {
                            if (j - start_now > 0 && this.state.Thursday[start_now] != 1) {
                                //console.log("Pushing", start_now, j);
                                temp.push([i, start_now, j])
                            }
                            start_now = j;
                        }
                        else {
                            if (this.state.Thursday[start_now] == 1) {
                                start_now++;
                            }
                        }
                    }
                }
                if (i == 5) {
                    start_now = st_grid_new;
                    for (j = st_grid_new; j < (49); j++) {
                        if (j == (48) && this.state.Friday[j] == 0) {
                            if (j - start_now > 0 && this.state.Friday[start_now] != 1) {
                                //console.log("Pushing", start_now, j);
                                temp.push([i, start_now, j + 1])
                            }
                            if (j - start_now > 0 && this.state.Friday[start_now] == 1) {
                                //console.log("Pushing0", start_now, j);
                                temp.push([i, start_now + 1, j + 1])
                            }
                        }
                        if (this.state.Friday[j] == 1) {
                            if (j - start_now > 0 && this.state.Friday[start_now] != 1) {
                                //console.log("Pushing", start_now, j);
                                temp.push([i, start_now, j])
                            }
                            start_now = j;
                        }
                        else {
                            if (this.state.Friday[start_now] == 1) {
                                start_now++;
                            }
                        }
                    }
                }
            }
            else {
                if (i == 0) {
                    start_now = we_st_grid_new;
                    for (j = we_st_grid_new; j < (we_st_grid_new + we_diff_new); j++) {
                        if (j == (we_st_grid_new + we_diff_new - 1) && this.state.Sunday[j] == 0) {
                            if (j - start_now > 0 && this.state.Sunday[start_now] != 1) {
                                //console.log("Pushing", start_now, j);
                                temp.push([i, start_now, j + 1])
                            }
                        }
                        if (this.state.Sunday[j] == 1) {
                            if (j - start_now > 0 && this.state.Sunday[start_now] != 1) {
                                //console.log("Pushing", start_now, j);
                                temp.push([i, start_now, j])
                            }
                            start_now = j;
                        }
                        else {
                            if (this.state.Sunday[start_now] == 1) {
                                start_now++;
                            }
                        }
                    }
                }
                if (i == 1) {
                    start_now = st_grid_new;
                    for (j = st_grid_new; j < (st_grid_new + diff_new); j++) {
                        if (j == (st_grid_new + diff_new - 1) && this.state.Monday[j] == 0) {
                            if (j - start_now > 0 && this.state.Monday[start_now] != 1) {
                                //console.log("Pushing", start_now, j);
                                temp.push([i, start_now, j + 1])
                            }
                        }
                        if (this.state.Monday[j] == 1) {
                            if (j - start_now > 0 && this.state.Monday[start_now] != 1) {
                                //console.log("Pushing", start_now, j);
                                temp.push([i, start_now, j])
                            }
                            start_now = j;
                        }
                        else {
                            if (this.state.Monday[start_now] == 1) {
                                start_now++;
                            }
                        }
                    }
                }
                if (i == 2) {
                    start_now = st_grid_new;
                    for (j = st_grid_new; j < (st_grid_new + diff_new); j++) {
                        if (j == (st_grid_new + diff_new - 1) && this.state.Tuesday[j] == 0) {
                            if (j - start_now > 0 && this.state.Tuesday[start_now] != 1) {
                                //console.log("Pushing", start_now, j);
                                temp.push([i, start_now, j + 1])
                            }
                        }
                        if (this.state.Tuesday[j] == 1) {
                            if (j - start_now > 0 && this.state.Tuesday[start_now] != 1) {
                                //console.log("Pushing", start_now, j);
                                temp.push([i, start_now, j])
                            }
                            start_now = j;
                        }
                        else {
                            if (this.state.Tuesday[start_now] == 1) {
                                start_now++;
                            }
                        }
                    }
                }
                if (i == 3) {
                    start_now = st_grid_new;
                    for (j = st_grid_new; j < (st_grid_new + diff_new); j++) {
                        if (j == (st_grid_new + diff_new - 1) && this.state.Wednesday[j] == 0) {
                            if (j - start_now > 0 && this.state.Wednesday[start_now] != 1) {
                                //console.log("Pushing", start_now, j);
                                temp.push([i, start_now, j + 1])
                            }
                        }
                        if (this.state.Wednesday[j] == 1) {
                            if (j - start_now > 0 && this.state.Wednesday[start_now] != 1) {
                                //console.log("Pushing", start_now, j);
                                temp.push([i, start_now, j])
                            }
                            start_now = j;
                        }
                        else {
                            if (this.state.Wednesday[start_now] == 1) {
                                start_now++;
                            }
                        }
                    }
                }
                if (i == 4) {
                    start_now = st_grid_new;
                    for (j = st_grid_new; j < (st_grid_new + diff_new); j++) {
                        if (j == (st_grid_new + diff_new - 1) && this.state.Thursday[j] == 0) {
                            if (j - start_now > 0 && this.state.Thursday[start_now] != 1) {
                                //console.log("Pushing", start_now, j);
                                temp.push([i, start_now, j + 1])
                            }
                        }
                        if (this.state.Thursday[j] == 1) {
                            if (j - start_now > 0 && this.state.Thursday[start_now] != 1) {
                                //console.log("Pushing", start_now, j);
                                temp.push([i, start_now, j])
                            }
                            start_now = j;
                        }
                        else {
                            if (this.state.Thursday[start_now] == 1) {
                                start_now++;
                            }
                        }
                    }
                }
                if (i == 5) {
                    start_now = st_grid_new;
                    for (j = st_grid_new; j < (st_grid_new + diff_new); j++) {
                        if (j == (st_grid_new + diff_new - 1) && this.state.Friday[j] == 0) {
                            if (j - start_now > 0 && this.state.Friday[start_now] != 1) {
                                //console.log("Pushing", start_now, j);
                                temp.push([i, start_now, j + 1])
                            }
                        }
                        if (this.state.Friday[j] == 1) {
                            if (j - start_now > 0 && this.state.Friday[start_now] != 1) {
                                //console.log("Pushing", start_now, j);
                                temp.push([i, start_now, j])
                            }
                            start_now = j;
                        }
                        else {
                            if (this.state.Friday[start_now] == 1) {
                                start_now++;
                            }
                        }
                    }
                }
                if (i == 6) {
                    start_now = we_st_grid_new;
                    for (j = we_st_grid_new; j < (we_st_grid_new + we_diff_new); j++) {
                        if (j == (we_st_grid_new + we_diff_new - 1) && this.state.Saturday[j] == 0) {
                            if (j - start_now > 0 && this.state.Saturday[start_now] != 1) {
                                //console.log("Pushing", start_now, j);
                                temp.push([i, start_now, j + 1])
                            }
                        }
                        if (this.state.Saturday[j] == 1) {
                            if (j - start_now > 0 && this.state.Saturday[start_now] != 1) {
                                //console.log("Pushing", start_now, j);
                                temp.push([i, start_now, j])
                            }
                            start_now = j;
                        }
                        else {
                            if (this.state.Saturday[start_now] == 1) {
                                start_now++;
                            }
                        }
                    }
                }
            }
        }
        //console.log(temp);
        this.setState({ freeEvents: temp });
    }

    renderEvents() {
        //console.log("Render Called");
        //console.log(this.state.freeEvents);
        return this.state.freeEvents.map((ev) => {
            //console.log(ev);
            //var st_grid_row = (st_min == 30) ? (mapping[st_hrs.toString()] + 1) : (mapping[st_hrs.toString()]);
            //var diff = ((ed_hrs - st_hrs) * 2) + (ed_min - st_min) / 30;
            //console.log(st_grid_row, diff, st_hrs, ed_hrs)
            if (ev[0] == 0 || ev[0] == 6) {
                if (this.state.we_handleAvail == true) {
                    return <div key={ev.id} className="event calendar2" style={{ "grid-column": `${ev[0] + 3}`, "grid-row": `${ev[1]}` + "/ span " + `${ev[2] - ev[1]}` }}>
                        Available Slot
                    </div>
                }
            }
            else {
                if (this.state.handleAvail == true) {
                    return <div key={ev.id} className="event calendar2" style={{ "grid-column": `${ev[0] + 3}`, "grid-row": `${ev[1]}` + "/ span " + `${ev[2] - ev[1]}` }}>
                        Available Slot
                    </div>
                }
            }
        })
    }

    componentDidMount() {
        this.getList();
        this.findVoids();
    }

    render() {

        //console.log(this.state.Monday);
        //console.log(this.state.freeEvents);
        //console.log("T");
        //console.log(this.state.slotst_hrs);
        //console.log(this.state.sloted_hrs);
        //console.log(this.state.Monday);
        //console.log(this.state.Tuesday);
        //console.log(this.state.Wednesday);
        /*console.log(this.state.Thursday);
        console.log(this.state.Friday);
        console.log(this.state.Saturday);*/
        return (
            <div>
                <div className="container pt-5">
                    <div className="row pd-handle-selector">
                        <div className="col-2 col-xs-2 col-lg-1 col-xl-1 col-md-2 col-sm-2">
                            <img src="./static/assets/Group 2.png" className="icon-weekday" />
                        </div>
                        <div className="col">
                            <h2>
                                General Availability
                            </h2>
                        </div>
                    </div>
                    <hr className="pd-handler-selector-br" />
                    <div className="row pd-handle-selector">
                        <div className="col-12 col-sm-12 col-md-6 pt-3 pt-md-0 pb-3 pb-md-0 bdr-right text-center">
                            <form onSubmit={this.handleSubmit} style={{ "z-index": "1", "display": "inline-block" }}>
                                <div className="row">
                                    <div className="col-10 col-sm-8">
                                        <div className="row">
                                            <h3>
                                                Weekdays <span>(Mon - Fri)</span>
                                            </h3>
                                        </div>
                                        <div className="row">
                                            <h4>
                                                Available From
                                        </h4>
                                        </div>
                                    </div>
                                    <div className="col-2 col-sm-4 text-center">
                                        <button type="submit" value="Submit" style={{ "border": "0px" }}><img src="./static/assets/Group.png" className={"icon-weekday2 " + ((this.state.handleAvail == false) ? "img-bw" : "")} /></button>
                                        <h4>{(this.state.handleAvail == true) ? "Enabled" : "Disabled"}</h4>
                                    </div>
                                </div>
                                <div className="row">
                                    <label className="us-form" style={{ "font-size": "20px" }}>
                                        <span className="us-form-select-wrap">
                                            <select value={((this.state.slotst_hrs.getHours() < 10) ? (0 + `${this.state.slotst_hrs.getHours()}`) : (`${this.state.slotst_hrs.getHours()}`)) + ':' + ((this.state.slotst_hrs.getMinutes() < 10) ? (0 + `${this.state.slotst_hrs.getMinutes()}`) : (`${this.state.slotst_hrs.getMinutes()}`))} onChange={this.handleChange}>
                                                <option value="00:00">00:00</option>
                                                <option value="00:30">00:30</option>
                                                <option value="01:00">01:00</option>
                                                <option value="01:30">01:30</option>
                                                <option value="02:00">02:00</option>
                                                <option value="02:30">02:30</option>
                                                <option value="03:00">03:00</option>
                                                <option value="03:30">03:30</option>
                                                <option value="04:00">04:00</option>
                                                <option value="04:30">04:30</option>
                                                <option value="05:00">05:00</option>
                                                <option value="05:30">05:30</option>
                                                <option value="06:00">06:00</option>
                                                <option value="06:30">06:30</option>
                                                <option value="07:00">07:00</option>
                                                <option value="07:30">07:30</option>
                                                <option value="08:00">08:00</option>
                                                <option value="08:30">08:30</option>
                                                <option value="09:00">09:00</option>
                                                <option value="09:30">09:30</option>
                                                <option value="10:00">10:00</option>
                                                <option value="10:30">10:30</option>
                                                <option value="11:00">11:00</option>
                                                <option value="11:30">11:30</option>
                                                <option value="12:00">12:00</option>
                                                <option value="12:30">12:30</option>
                                                <option value="13:00">13:00</option>
                                                <option value="13:30">13:30</option>
                                                <option value="14:00">14:00</option>
                                                <option value="14:30">14:30</option>
                                                <option value="15:00">15:00</option>
                                                <option value="15:30">15:30</option>
                                                <option value="16:00">16:00</option>
                                                <option value="16:30">16:30</option>
                                                <option value="17:00">17:00</option>
                                                <option value="17:30">17:30</option>
                                                <option value="18:00">18:00</option>
                                                <option value="18:30">18:30</option>
                                                <option value="19:00">19:00</option>
                                                <option value="19:30">19:30</option>
                                                <option value="20:00">20:00</option>
                                                <option value="20:30">20:30</option>
                                                <option value="21:00">21:00</option>
                                                <option value="21:30">21:30</option>
                                                <option value="22:00">22:00</option>
                                                <option value="22:30">22:30</option>
                                                <option value="23:00">23:00</option>
                                                <option value="23:30">23:30</option>
                                            </select>
                                            <span className="p-2">to</span>
                                            <select value={(this.state.sloted_hrs.getHours() == 0 && this.state.sloted_hrs.getMinutes() == 0) ? "24:00" : (((this.state.sloted_hrs.getHours() < 10) ? (0 + `${this.state.sloted_hrs.getHours()}`) : (`${this.state.sloted_hrs.getHours()}`)) + ':' + ((this.state.sloted_hrs.getMinutes() < 10) ? (0 + `${this.state.sloted_hrs.getMinutes()}`) : (`${this.state.sloted_hrs.getMinutes()}`)))} onChange={this.handleChange2}>
                                                <option value="00:00">00:00</option>
                                                <option value="00:30">00:30</option>
                                                <option value="01:00">01:00</option>
                                                <option value="01:30">01:30</option>
                                                <option value="02:00">02:00</option>
                                                <option value="02:30">02:30</option>
                                                <option value="03:00">03:00</option>
                                                <option value="03:30">03:30</option>
                                                <option value="04:00">04:00</option>
                                                <option value="04:30">04:30</option>
                                                <option value="05:00">05:00</option>
                                                <option value="05:30">05:30</option>
                                                <option value="06:00">06:00</option>
                                                <option value="06:30">06:30</option>
                                                <option value="07:00">07:00</option>
                                                <option value="07:30">07:30</option>
                                                <option value="08:00">08:00</option>
                                                <option value="08:30">08:30</option>
                                                <option value="09:00">09:00</option>
                                                <option value="09:30">09:30</option>
                                                <option value="10:00">10:00</option>
                                                <option value="10:30">10:30</option>
                                                <option value="11:00">11:00</option>
                                                <option value="11:30">11:30</option>
                                                <option value="12:00">12:00</option>
                                                <option value="12:30">12:30</option>
                                                <option value="13:00">13:00</option>
                                                <option value="13:30">13:30</option>
                                                <option value="14:00">14:00</option>
                                                <option value="14:30">14:30</option>
                                                <option value="15:00">15:00</option>
                                                <option value="15:30">15:30</option>
                                                <option value="16:00">16:00</option>
                                                <option value="16:30">16:30</option>
                                                <option value="17:00">17:00</option>
                                                <option value="17:30">17:30</option>
                                                <option value="18:00">18:00</option>
                                                <option value="18:30">18:30</option>
                                                <option value="19:00">19:00</option>
                                                <option value="19:30">19:30</option>
                                                <option value="20:00">20:00</option>
                                                <option value="20:30">20:30</option>
                                                <option value="21:00">21:00</option>
                                                <option value="21:30">21:30</option>
                                                <option value="22:00">22:00</option>
                                                <option value="22:30">22:30</option>
                                                <option value="23:00">23:00</option>
                                                <option value="23:30">23:30</option>
                                                <option value="24:00">24:00</option>
                                            </select>
                                        </span>
                                    </label>
                                </div>
                            </form>
                        </div>
                        <hr />
                        <div className="col-12 col-sm-12 col-md-6 pt-3 pt-md-0 pb-3 pb-md-0 text-center">
                            <form onSubmit={this.handleSubmit2} style={{ "z-index": "1", "display": "inline-block" }}>
                                <div className="row">
                                    <div className="col-10 col-sm-8">
                                        <div className="row">
                                            <h3>
                                                Weekdays <span>(Sat - Sun)</span>
                                            </h3>
                                        </div>
                                        <div className="row">
                                            <h4>
                                                Available From
                                        </h4>
                                        </div>
                                    </div>
                                    <div className="col-2 col-sm-4 text-center">
                                        <button type="submit" value="Submit" style={{ "border": "0px" }}><img src="./static/assets/Group.png" className={"icon-weekday2 " + ((this.state.we_handleAvail == false) ? "img-bw" : "")} /></button>
                                        <h4>{(this.state.we_handleAvail == true) ? "Enabled" : "Disabled"}</h4>
                                    </div>
                                </div>
                                <div className="row">
                                    <label className="us-form" style={{ "font-size": "20px" }}>
                                        <select value={((this.state.we_slotst_hrs.getHours() < 10) ? (0 + `${this.state.we_slotst_hrs.getHours()}`) : (`${this.state.we_slotst_hrs.getHours()}`)) + ':' + ((this.state.we_slotst_hrs.getMinutes() < 10) ? (0 + `${this.state.we_slotst_hrs.getMinutes()}`) : (`${this.state.we_slotst_hrs.getMinutes()}`))} onChange={this.handleChange3}>
                                            <option value="00:00">00:00</option>
                                            <option value="00:30">00:30</option>
                                            <option value="01:00">01:00</option>
                                            <option value="01:30">01:30</option>
                                            <option value="02:00">02:00</option>
                                            <option value="02:30">02:30</option>
                                            <option value="03:00">03:00</option>
                                            <option value="03:30">03:30</option>
                                            <option value="04:00">04:00</option>
                                            <option value="04:30">04:30</option>
                                            <option value="05:00">05:00</option>
                                            <option value="05:30">05:30</option>
                                            <option value="06:00">06:00</option>
                                            <option value="06:30">06:30</option>
                                            <option value="07:00">07:00</option>
                                            <option value="07:30">07:30</option>
                                            <option value="08:00">08:00</option>
                                            <option value="08:30">08:30</option>
                                            <option value="09:00">09:00</option>
                                            <option value="09:30">09:30</option>
                                            <option value="10:00">10:00</option>
                                            <option value="10:30">10:30</option>
                                            <option value="11:00">11:00</option>
                                            <option value="11:30">11:30</option>
                                            <option value="12:00">12:00</option>
                                            <option value="12:30">12:30</option>
                                            <option value="13:00">13:00</option>
                                            <option value="13:30">13:30</option>
                                            <option value="14:00">14:00</option>
                                            <option value="14:30">14:30</option>
                                            <option value="15:00">15:00</option>
                                            <option value="15:30">15:30</option>
                                            <option value="16:00">16:00</option>
                                            <option value="16:30">16:30</option>
                                            <option value="17:00">17:00</option>
                                            <option value="17:30">17:30</option>
                                            <option value="18:00">18:00</option>
                                            <option value="18:30">18:30</option>
                                            <option value="19:00">19:00</option>
                                            <option value="19:30">19:30</option>
                                            <option value="20:00">20:00</option>
                                            <option value="20:30">20:30</option>
                                            <option value="21:00">21:00</option>
                                            <option value="21:30">21:30</option>
                                            <option value="22:00">22:00</option>
                                            <option value="22:30">22:30</option>
                                            <option value="23:00">23:00</option>
                                            <option value="23:30">23:30</option>
                                        </select>
                                        <span className="p-2">to</span>
                                        <select value={(this.state.we_sloted_hrs.getHours() == 0 && this.state.we_sloted_hrs.getMinutes() == 0) ? "24:00" : (((this.state.we_sloted_hrs.getHours() < 10) ? (0 + `${this.state.we_sloted_hrs.getHours()}`) : (`${this.state.we_sloted_hrs.getHours()}`)) + ':' + ((this.state.we_sloted_hrs.getMinutes() < 10) ? (0 + `${this.state.we_sloted_hrs.getMinutes()}`) : (`${this.state.we_sloted_hrs.getMinutes()}`)))} onChange={this.handleChange4}>
                                            <option value="00:00">00:00</option>
                                            <option value="00:30">00:30</option>
                                            <option value="01:00">01:00</option>
                                            <option value="01:30">01:30</option>
                                            <option value="02:00">02:00</option>
                                            <option value="02:30">02:30</option>
                                            <option value="03:00">03:00</option>
                                            <option value="03:30">03:30</option>
                                            <option value="04:00">04:00</option>
                                            <option value="04:30">04:30</option>
                                            <option value="05:00">05:00</option>
                                            <option value="05:30">05:30</option>
                                            <option value="06:00">06:00</option>
                                            <option value="06:30">06:30</option>
                                            <option value="07:00">07:00</option>
                                            <option value="07:30">07:30</option>
                                            <option value="08:00">08:00</option>
                                            <option value="08:30">08:30</option>
                                            <option value="09:00">09:00</option>
                                            <option value="09:30">09:30</option>
                                            <option value="10:00">10:00</option>
                                            <option value="10:30">10:30</option>
                                            <option value="11:00">11:00</option>
                                            <option value="11:30">11:30</option>
                                            <option value="12:00">12:00</option>
                                            <option value="12:30">12:30</option>
                                            <option value="13:00">13:00</option>
                                            <option value="13:30">13:30</option>
                                            <option value="14:00">14:00</option>
                                            <option value="14:30">14:30</option>
                                            <option value="15:00">15:00</option>
                                            <option value="15:30">15:30</option>
                                            <option value="16:00">16:00</option>
                                            <option value="16:30">16:30</option>
                                            <option value="17:00">17:00</option>
                                            <option value="17:30">17:30</option>
                                            <option value="18:00">18:00</option>
                                            <option value="18:30">18:30</option>
                                            <option value="19:00">19:00</option>
                                            <option value="19:30">19:30</option>
                                            <option value="20:00">20:00</option>
                                            <option value="20:30">20:30</option>
                                            <option value="21:00">21:00</option>
                                            <option value="21:30">21:30</option>
                                            <option value="22:00">22:00</option>
                                            <option value="22:30">22:30</option>
                                            <option value="23:00">23:00</option>
                                            <option value="23:30">23:30</option>
                                            <option value="24:00">24:00</option>
                                        </select>
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="container11 container">
                    <div></div>
                    <div className="days">
                        <div className="filler"></div>
                        <div className="filler"></div>
                        <div className={"day " + ((this.weekday == 0) ? "current" : "")}>{this.weekstart.getDate()}/{this.weekstart.getMonth() + 1} Sun</div>
                        <div className={"day " + ((this.weekday == 1) ? "current" : "")}>{this.weekstart.getDate() + 1}/{this.weekstart.getMonth() + 1} Mon</div>
                        <div className={"day " + ((this.weekday == 2) ? "current" : "")}>{this.weekstart.getDate() + 2}/{this.weekstart.getMonth() + 1} Tue</div>
                        <div className={"day " + ((this.weekday == 3) ? "current" : "")}>{this.weekstart.getDate() + 3}/{this.weekstart.getMonth() + 1} Wed</div>
                        <div className={"day " + ((this.weekday == 4) ? "current" : "")}>{this.weekstart.getDate() + 4}/{this.weekstart.getMonth() + 1} Thu</div>
                        <div className={"day " + ((this.weekday == 5) ? "current" : "")}>{this.weekstart.getDate() + 5}/{this.weekstart.getMonth() + 1} Fri</div>
                        <div className={"day " + ((this.weekday == 6) ? "current" : "")}>{this.weekstart.getDate() + 6}/{this.weekstart.getMonth() + 1} Sat</div>
                    </div>
                    <div className="content11">
                        <div className="time" style={{ "grid-row": '1' }}>12am</div>
                        <div className="time" style={{ "grid-row": '3' }}>01am</div>
                        <div className="time" style={{ "grid-row": '5' }}>02am</div>
                        <div className="time" style={{ "grid-row": '7' }}>03am</div>
                        <div className="time" style={{ "grid-row": '9' }}>04am</div>
                        <div className="time" style={{ "grid-row": '11' }}>05am</div>
                        <div className="time" style={{ "grid-row": '13' }}>06am</div>
                        <div className="time" style={{ "grid-row": '15' }}>07am</div>
                        <div className="time" style={{ "grid-row": '17' }}>08am</div>
                        <div className="time" style={{ "grid-row": '19' }}>09am</div>
                        <div className="time" style={{ "grid-row": '21' }}>10am</div>
                        <div className="time" style={{ "grid-row": '23' }}>11am</div>
                        <div className="time" style={{ "grid-row": '25' }}>12pm</div>
                        <div className="time" style={{ "grid-row": '27' }}>13pm</div>
                        <div className="time" style={{ "grid-row": '29' }}>14pm</div>
                        <div className="time" style={{ "grid-row": '31' }}>15pm</div>
                        <div className="time" style={{ "grid-row": '33' }}>16pm</div>
                        <div className="time" style={{ "grid-row": '35' }}>17pm</div>
                        <div className="time" style={{ "grid-row": '37' }}>18pm</div>
                        <div className="time" style={{ "grid-row": '39' }}>19pm</div>
                        <div className="time" style={{ "grid-row": '41' }}>20pm</div>
                        <div className="time" style={{ "grid-row": '43' }}>21pm</div>
                        <div className="time" style={{ "grid-row": '45' }}>22pm</div>
                        <div className="time" style={{ "grid-row": '47' }}>23pm</div>
                        <div className="filler-col"></div>
                        <div className="col11" style={{ "grid-column": '3', "border": (this.weekday == 0) ? "2px solid blue" : "" }}></div>
                        <div className="col11" style={{ "grid-column": '4', "border": (this.weekday == 1) ? "2px solid blue" : "" }}></div>
                        <div className="col11" style={{ "grid-column": '5', "border": (this.weekday == 2) ? "2px solid blue" : "" }}></div>
                        <div className="col11" style={{ "grid-column": '6', "border": (this.weekday == 3) ? "2px solid blue" : "" }}></div>
                        <div className="col11" style={{ "grid-column": '7', "border": (this.weekday == 4) ? "2px solid blue" : "" }}></div>
                        <div className="col11" style={{ "grid-column": '8', "border": (this.weekday == 5) ? "2px solid blue" : "" }}></div>
                        <div className="col11" style={{ "grid-column": '9', "border": (this.weekday == 6) ? "2px solid blue" : "" }}></div>
                        <div className="row11" style={{ 'grid-row': '1', "border-bottom": '1px solid #f3f2f1' }}></div>
                        <div className="row11" style={{ 'grid-row': '2', "border-bottom": '3px solid #f3f2f1' }}></div>
                        <div className="row11" style={{ 'grid-row': '3', "border-bottom": '1px solid #f3f2f1' }}></div>
                        <div className="row11" style={{ 'grid-row': '4', "border-bottom": '3px solid #f3f2f1' }}></div>
                        <div className="row11" style={{ 'grid-row': '5', "border-bottom": '1px solid #f3f2f1' }}></div>
                        <div className="row11" style={{ 'grid-row': '6', "border-bottom": '3px solid #f3f2f1' }}></div>
                        <div className="row11" style={{ 'grid-row': '7', "border-bottom": '1px solid #f3f2f1' }}></div>
                        <div className="row11" style={{ 'grid-row': '8', "border-bottom": '3px solid #f3f2f1' }}></div>
                        <div className="row11" style={{ 'grid-row': '9', "border-bottom": '1px solid #f3f2f1' }}></div>
                        <div className="row11" style={{ 'grid-row': '10', "border-bottom": '3px solid #f3f2f1' }}></div>
                        <div className="row11" style={{ 'grid-row': '11', "border-bottom": '1px solid #f3f2f1' }}></div>
                        <div className="row11" style={{ 'grid-row': '12', "border-bottom": '3px solid #f3f2f1' }}></div>
                        <div className="row11" style={{ 'grid-row': '13', "border-bottom": '1px solid #f3f2f1' }}></div>
                        <div className="row11" style={{ 'grid-row': '14', "border-bottom": '3px solid #f3f2f1' }}></div>
                        <div className="row11" style={{ 'grid-row': '15', "border-bottom": '1px solid #f3f2f1' }}></div>
                        <div className="row11" style={{ 'grid-row': '16', "border-bottom": '3px solid #f3f2f1' }}></div>
                        <div className="row11" style={{ 'grid-row': '17', "border-bottom": '1px solid #f3f2f1' }}></div>
                        <div className="row11" style={{ 'grid-row': '18', "border-bottom": '3px solid #f3f2f1' }}></div>
                        <div className="row11" style={{ 'grid-row': '19', "border-bottom": '1px solid #f3f2f1' }}></div>
                        <div className="row11" style={{ 'grid-row': '20', "border-bottom": '3px solid #f3f2f1' }}></div>
                        <div className="row11" style={{ 'grid-row': '21', "border-bottom": '1px solid #f3f2f1' }}></div>
                        <div className="row11" style={{ 'grid-row': '22', "border-bottom": '3px solid #f3f2f1' }}></div>
                        <div className="row11" style={{ 'grid-row': '23', "border-bottom": '1px solid #f3f2f1' }}></div>
                        <div className="row11" style={{ 'grid-row': '24', "border-bottom": '3px solid #f3f2f1' }}></div>
                        <div className="row11" style={{ 'grid-row': '25', "border-bottom": '1px solid #f3f2f1' }}></div>
                        <div className="row11" style={{ 'grid-row': '26', "border-bottom": '3px solid #f3f2f1' }}></div>
                        <div className="row11" style={{ 'grid-row': '27', "border-bottom": '1px solid #f3f2f1' }}></div>
                        <div className="row11" style={{ 'grid-row': '28', "border-bottom": '3px solid #f3f2f1' }}></div>
                        <div className="row11" style={{ 'grid-row': '29', "border-bottom": '1px solid #f3f2f1' }}></div>
                        <div className="row11" style={{ 'grid-row': '30', "border-bottom": '3px solid #f3f2f1' }}></div>
                        <div className="row11" style={{ 'grid-row': '31', "border-bottom": '1px solid #f3f2f1' }}></div>
                        <div className="row11" style={{ 'grid-row': '32', "border-bottom": '3px solid #f3f2f1' }}></div>
                        <div className="row11" style={{ 'grid-row': '33', "border-bottom": '1px solid #f3f2f1' }}></div>
                        <div className="row11" style={{ 'grid-row': '34', "border-bottom": '3px solid #f3f2f1' }}></div>
                        <div className="row11" style={{ 'grid-row': '35', "border-bottom": '1px solid #f3f2f1' }}></div>
                        <div className="row11" style={{ 'grid-row': '36', "border-bottom": '3px solid #f3f2f1' }}></div>
                        <div className="row11" style={{ 'grid-row': '37', "border-bottom": '1px solid #f3f2f1' }}></div>
                        <div className="row11" style={{ 'grid-row': '38', "border-bottom": '3px solid #f3f2f1' }}></div>
                        <div className="row11" style={{ 'grid-row': '39', "border-bottom": '1px solid #f3f2f1' }}></div>
                        <div className="row11" style={{ 'grid-row': '40', "border-bottom": '3px solid #f3f2f1' }}></div>
                        <div className="row11" style={{ 'grid-row': '41', "border-bottom": '1px solid #f3f2f1' }}></div>
                        <div className="row11" style={{ 'grid-row': '42', "border-bottom": '3px solid #f3f2f1' }}></div>
                        <div className="row11" style={{ 'grid-row': '43', "border-bottom": '1px solid #f3f2f1' }}></div>
                        <div className="row11" style={{ 'grid-row': '44', "border-bottom": '3px solid #f3f2f1' }}></div>
                        <div className="row11" style={{ 'grid-row': '45', "border-bottom": '1px solid #f3f2f1' }}></div>
                        <div className="row11" style={{ 'grid-row': '46', "border-bottom": '3px solid #f3f2f1' }}></div>
                        <div className="row11" style={{ 'grid-row': '47', "border-bottom": '1px solid #f3f2f1' }}></div>
                        <div className="row11" style={{ 'grid-row': '48' }}></div>
                        <div className="row11" style={{ 'grid-row': '49' }}></div>
                        <>
                            <Event eventsList={this.props.eventsList} />
                            {this.renderEvents()}
                        </>
                    </div>
                </div >
            </div>
        )
    }
}

export default LayoutDraw;