import React, { useState } from 'react';

const DashBoardPaginate = ({ videoPerPage, totalSize, paginate }) => {
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalSize / videoPerPage); i++) {
    pageNumbers.push(i);
  }
  const [page, setPage] = useState(1)
  return (
    <div>
      <ul>
        {
          pageNumbers.map(number => (
            <div style={{ display: 'inline', padding: "80px 0" }} key={number}>
              <a href='#start' style={page === number ? { color: 'white', padding: "9px", borderRadius: '4px', marginRight: '11px', background: '#85233E' } : { color: 'white', padding: "9px", borderRadius: '4px', marginRight: '7px', background: '#b5b5b5' }} onClick={e => paginate(number) & setPage(number)}>{number}</a>
            </div>
          ))
        }
      </ul>
    </div>
  );
};

export default DashBoardPaginate;