import styled from "styled-components";

export const Container = styled.div`
  width: 125%;
  height: 5vh;
  margin-top: -10px;
  left: 0;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;


  @media (max-width: 768px) {
    width: 135%;
  }
`;

export const TableFunc = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  max-width: 1024px;
  font-family: Helvetica Neue;
  font-weight: 500;
  font-size: 20px;
  color: #1c1c1c;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
  }
`;

export const TableContainer = styled.div`
  width: 120%;
  margin: 10px auto;
  background: #f2f2f2;
  padding: 20px;
  border-radius: 8px;


`;

export const SearchBar = styled.input`
  width: 100%;
  max-width: 287px;
  height: 48px;
  padding: 12px 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;

  @media (max-width: 768px) {
    max-width: 100%;
  }


`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-radius: 8px;
  border-spacing: 0;
  overflow: hidden;

  th, td {
    padding: 10px;
    text-align: left;
  }

  @media (max-width: 768px) {
    th:nth-child(n+3), td:nth-child(n+3) {
      display: none;
     
    }

  
  }
  
`;

export const TableHeader = styled.thead`
  background: #0500ff;
  color: white;
  font-weight: 500;
  font-size: 16px;
  height: 56px;
  font-family: Helvetica Neue;
 
  th:first-child {
    border-top-left-radius: 8px;
  }

  th:last-child {
    border-top-right-radius: 8px;
  }

  th {
    padding: 10px;
  }
 

`;

export const TableRow = styled.tr`
  box-shadow: 0px 1px 2px 0px #00000033;
  font-weight: 400;
  font-size: 16px;
  width: 100%;
  height: auto;

  &.mobile-details {
    display: none;
    background: #f9f9f9;
    
    @media (max-width: 768px) {
      display: table-row;
    
      
    }
  }
`;

export const TableCell = styled.td`
  padding: 10px;
  border: none;
  text-align: start;
`;

export const TableImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const ArrowButton = styled.button`
 background: none;
  border: none;
  font-size: 12px;
  cursor: pointer;
  margin-left: 8px;
  color: blue; 
  display: none;

  &:focus {
    outline: none;
    box-shadow: none;
  }

  @media (max-width: 768px) {
    display: inline;
    float: right;
   
  }
`;

