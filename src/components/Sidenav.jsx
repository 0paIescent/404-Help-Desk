import React from "react"
import {Dropdown, Sidebar} from "semantic-ui-react"

import styles from "../styles.css"

class Sidenav extends React.Component {
  render() {
    return (
      <Sidebar
          className={styles.sideNav}
          visible={true}>
        <Dropdown selection text="Unassigned Tickets">
          <Dropdown.Menu>
            <Dropdown.Item text="Andrew's Tickets" />
            <Dropdown.Item text="Jacob's Tickets" />
            <Dropdown.Item text="Jerry's Tickets" />
            <Dropdown.Item text="Kurt's Tickets" />
            <Dropdown.Item text="Marino's Tickets" />
            <Dropdown.Item text="Scott's Tickets" />
          </Dropdown.Menu>
        </Dropdown>
      </Sidebar>
    )
  }
}

export default Sidenav