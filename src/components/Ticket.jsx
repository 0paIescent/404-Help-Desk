import React from "react";
import PropTypes from "prop-types";
import {Table, Popup} from "semantic-ui-react";

class Ticket extends React.Component {
  render() {
    const {id, subject, assignee, creator, date_created} = this.props.ticket

    return (
      <Table.Row>
        <Table.Cell
            textAlign="center">
          {id.toString().padStart(5, "0")}
        </Table.Cell>
        <Table.Cell>{subject}</Table.Cell>
        <Table.Cell>{assignee}</Table.Cell>
        <Table.Cell>{creator}</Table.Cell>
        <Popup
            trigger={
              <Table.Cell
                  textAlign="center">
                {date_created.split(" ")[0]}
              </Table.Cell>}
            content={"at " + date_created.split(" ").slice(1, 3).join(" ")}>
        </Popup>
      </Table.Row>
    )
  }
}

Ticket.propTypes = {
  ticket: PropTypes.object.isRequired
}

export default Ticket;