import React from 'react'

class Event extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            eventsList: props.eventsList,
        }
    }

    componentDidMount() {

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
            //console.log(st_grid_row, diff, st_hrs, ed_hrs)
            if (ed_hrs == 0 && ed_min == 0) {
                return <div key={ev.id} className="event calendar1" style={{ "z-index" : '1', "grid-column": `${weekday + 3}`, "grid-row": `${st_grid_row}` + "/ 49 "}}>
                    {ev.summary}
                </div>
            }
            else {
                return <div key={ev.id} className="event calendar1" style={{ "grid-column": `${weekday + 3}`, "grid-row": `${st_grid_row}` + "/ span " + `${diff}` }}>
                    {ev.summary}
                </div>
            }
        })
    }

    render() {

        return (
            <>
                {
                    this.getList()
                }
            </>
        )
    }
}

export default Event;

//<div className="event event1 calendar1">Event 1</div>
 //   <div className="event event2 calendar2">Event 2</div>
 //   <div className="event event3 calendar2">Event 3</div>
  //  <div className="event event4 calendar1">Event 4</div>