import  "./index.css"
import React, { useState } from 'react';



const Transaction = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const tableData = [
    
    {reciever: "Tigoni Factory", type: "Shopping", date: "13th Jan 2024", amountPaid: 1200},
    {reciever: "Tigoni Factory", type: "Shopping", date: "13th Jan 2024", amountPaid: 1200},
    {reciever: "Tigoni Factory", type: "Shopping", date: "13th Jan 2024", amountPaid: 1200},
    {reciever: "Tigoni Factory", type: "Shopping", date: "13th Jan 2024", amountPaid: 1200},
    {reciever: "Tigoni Factory", type: "Shopping", date: "13th Jan 2024", amountPaid: 1200},
    {reciever: "Tigoni Factory", type: "Shopping", date: "13th Jan 2024", amountPaid: 1200},
    {reciever: "Tigoni Factory", type: "Shopping", date: "13th Jan 2024", amountPaid: 1200},
    {reciever: "Tigoni Factory", type: "Shopping", date: "13th Jan 2024", amountPaid: 1200},
    {reciever: "Tigoni Factory", type: "Shopping", date: "13th Jan 2024", amountPaid: 1200},
    {reciever: "Tigoni Factory", type: "Shopping", date: "13th Jan 2024", amountPaid: 1200},
    {reciever: "Tigoni Factory", type: "Shopping", date: "13th Jan 2024", amountPaid: 1200},
    {reciever: "Tigoni Factory", type: "Shopping", date: "13th Jan 2024", amountPaid: 1200},
    
  ];
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tableData.slice(indexOfFirstItem, indexOfLastItem);
  const Pagination = ({ currentPage, setCurrentPage }) => {
    const totalPages = Math.ceil(tableData.length / itemsPerPage);
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
    return (
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
          <div 
          key={pageNumber}
            className={`pagination-item ${currentPage === pageNumber ? 'active' : ''}`}
            onClick={() => handlePageChange(pageNumber)}
          >
            
          
            {pageNumber}
          </div>
        ))}
      </div>
    );
  };
  return (
    <div>
      <h1 className="transactions">Transactions</h1>
      <div className="transaction">
        <table className="transactions-table">
          <thead>
            <tr>
              <th>Reciever</th>
              <th>Type</th>
              <th>Date</th>
              <th>Amount Paid</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((row, index) => (
              <tr key={index}>
                <td>{row.reciever}</td>
                <td>{row.type}</td>
                <td>{row.date}</td>
                <td>{row.amountPaid}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination-container">
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
};

 export default Transaction;