import React from "react";
import PropTypes from "prop-types";
import {Table} from "semantic-ui-react";

import Ticket from "../Ticket.jsx";

class TicketContainer extends React.Component {
  render() {
    return (
      <div>
        <Table celled structured sortable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width="one" textAlign="center">Ticket #</Table.HeaderCell>
              <Table.HeaderCell width="three">Subject</Table.HeaderCell>
              <Table.HeaderCell>Assignee</Table.HeaderCell>
              <Table.HeaderCell>Creator</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Date Created</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {
              this.props.tickets.map(t => {
                return (
                  <Ticket key={t.id} ticket={t}/>
                );
              })
            }
          </Table.Body>
        </Table>
      </div>
    );
  }
}

TicketContainer.propTypes = {
  tickets: PropTypes.array.isRequired
};

export default TicketContainer;