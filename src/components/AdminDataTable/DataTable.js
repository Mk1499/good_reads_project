import React from 'react';
import Cell from './Cell';
import './DataTable.css';

export default class DataTable extends React.Component {

  renderHeadingRow = (_cell, cellIndex) => {
    const { headings } = this.props;

    return (

      <Cell
        key={`heading-${cellIndex}`}
        content={headings[cellIndex]}
        header={true}
        fixed={cellIndex === 0}
      />

    );
  };

  renderRow = (_row, rowIndex) => {
    const { rows } = this.props;

    return (
      <tr key={`row-${rowIndex}`}>
        {rows[rowIndex].map((_cell, cellIndex) => {
          return (
            <Cell
              key={`${rowIndex}-${cellIndex}`}
              content={rows[rowIndex][cellIndex]}
              fixed={cellIndex === 0}
            />
          )
        })}
        <td className="Cell">

          <a href="#">
            <i className="fas fa-pencil-alt"></i>
          </a>
          &nbsp; &nbsp;&nbsp; &nbsp;
        <a href="#">
            <i className="fas fa-trash"></i>
          </a>
        </td>
      </tr>

    )
  };

  render() {
    const { headings, rows } = this.props;

    this.renderHeadingRow = this.renderHeadingRow.bind(this);
    this.renderRow = this.renderRow.bind(this);

    const theadMarkup = (
      <tr key="heading">
        {headings.map(this.renderHeadingRow)}
        <th className="Cell">Actions</th>
      </tr>
    );

    const tbodyMarkup = rows.map(this.renderRow);

    return (
      <div className="DataTable">
        <div className="ScrollContainer">
          <table className="Table" ref={this.setTable}>
            <thead>{theadMarkup}</thead>
            <tbody>{tbodyMarkup}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
