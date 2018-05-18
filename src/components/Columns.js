import React from 'react';

import Row from './Row';

import PropTypes from 'prop-types';

function Columns(props) {
  const columns = props.board.map((row, index) => {
    return(
      <div key={index.toString()}>
        <Row 
          row={row} 
          rowId={index} 
          buttonClick={props.buttonClick}
          buttonRightClick={props.buttonRightClick}
        />
      </div>
    );
  });
  return(
    <div>
      {columns}
    </div>
  );
}

Columns.propTypes = {
  board: PropTypes.array,
  buttonClick: PropTypes.func,
  buttonRightClick: PropTypes.func,
};


export default Columns;
