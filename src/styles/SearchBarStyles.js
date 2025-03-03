import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

export const SearchContainer = styled.div`
  position: relative;
  width: 230px; 
  display: flex;
  align-items: center;
    @media (max-width: 768px) {
    width: 102%;
   
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px 35px 10px 15px; 
  border: 1px solid #ccc;
  border-radius:8px; 
  background-color: #f8f8f8; 
  font-size: 14px;
  outline: none;
`;

export const SearchIcon = styled(FaSearch)`
  position: absolute;
  right: 10px;
  color: #999;
  font-size: 14px;
  cursor: pointer;
 
`;
