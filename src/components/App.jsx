import React from "react"
import ReactDOM from "react-dom"

import Sidenav from "./Sidenav.jsx"
import TicketContainer from "./containers/TicketContainer.jsx"

import styles from "../styles.css"

console.log(styles)

class App extends React.Component {
  state = {
    tickets: [
      {
        id: 1,
        creator: "Jacob Harrison",
        assignee: "Andrew DeFilippo",
        date_created: "05/24/18 05:26 PM",
        subject: "Testing",
        body: "Does it work?"
      },
      {
        id: 2,
        creator: "Molly Agee",
        assignee: "Jacob Harrison",
        date_created: "05/24/18 01:34 PM",
        subject: "Pun",
        body: "Haha pun funny joke"
      }
    ]
  }

  render() {
    return (
      <div className={styles.rootContainer}>
        <Sidenav />
        <TicketContainer tickets={this.state.tickets} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))