import React from "react";
import PropTypes from "prop-types";
import {Table} from "semantic-ui-react";

class Ticket extends React.Component {
  render() {
    const {id, creator, assignee, date_created, subject} = this.props.ticket;
    return (
      <Table.Row>
        <Table.Cell width="one" textAlign="center">{id.toString().padStart(5, "0")}</Table.Cell>
        <Table.Cell width="three">{subject}</Table.Cell>
        <Table.Cell>{assignee}</Table.Cell>
        <Table.Cell>{creator}</Table.Cell>
        <Table.Cell textAlign="center">{date_created.split(" ")[0]}</Table.Cell>
      </Table.Row>
    );
  }
}

Ticket.propTypes = {
  ticket: PropTypes.object.isRequired
};

export default Ticket;