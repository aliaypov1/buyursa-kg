import React, { useState } from 'react';

const VideoPagination = ({ videoPerPage, totalSize, paginate }) => {
  const pageNumbers = []
  for (let i = 1; i < Math.ceil(totalSize / videoPerPage); i++) {
    pageNumbers.push(i)
  }
  const [page, setPage] = useState(1)
  return (
    <div>
      <ul>
        {
          pageNumbers.map(number => (
            <li key={number}>
              <a style={page === number ? { color: 'red' } : { color: 'blue' }} onClick={e => paginate(number) & setPage(number)}>{number}</a>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default VideoPagination;