import React from "react";
import PropTypes from "prop-types";
import {Table} from "semantic-ui-react";
import _ from "lodash";

import Ticket from "../Ticket.jsx";

class TicketContainer extends React.Component {
  state = {
    sortColumn: null,
    sortDirection: null,
    tickets: this.props.tickets
  }

  handleSort = clickedColumn => () => {
    const {sortColumn, sortDirection, tickets} = this.state

    if (sortColumn !== clickedColumn) {
      this.setState({
        sortColumn: clickedColumn,
        tickets: _.sortBy(tickets, [clickedColumn]),
        sortDirection: "ascending"
      })

      return
    }

    this.setState({
      tickets: tickets.reverse(),
      sortDirection: sortDirection === "ascending" ? "descending" : "ascending"
    })
  }

  render() {
    const {sortColumn, sortDirection} = this.state

    return (
      <div>
        <Table celled structured sortable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell
                  sorted={sortColumn === "id" ? sortDirection : null}
                  onClick={this.handleSort("id")}
                  textAlign="center">
                Ticket #
              </Table.HeaderCell>
              <Table.HeaderCell
                  sorted={sortColumn === "subject" ? sortDirection : null}
                  onClick={this.handleSort("subject")}>
                Subject
              </Table.HeaderCell>
              <Table.HeaderCell
                  sorted={sortColumn === "assignee" ? sortDirection : null}
                  onClick={this.handleSort("assignee")}>
                Assignee
              </Table.HeaderCell>
              <Table.HeaderCell
                  sorted={sortColumn === "creator" ? sortDirection : null}
                  onClick={this.handleSort("creator")}>
                Creator
              </Table.HeaderCell>
              <Table.HeaderCell
                  sorted={sortColumn === "date_created" ? sortDirection : null}
                  onClick={this.handleSort("date_created")}
                  textAlign="center">
                Date Created
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {
              this.state.tickets.map(t => {
                return (
                  <Ticket key={t.id} ticket={t}/>
                );
              })
            }
          </Table.Body>
        </Table>
      </div>
    )
  }
}

TicketContainer.propTypes = {
  tickets: PropTypes.array.isRequired
}

export default TicketContainer;