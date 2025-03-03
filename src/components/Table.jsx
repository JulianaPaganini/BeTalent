import { useEffect, useState } from 'react';
import Logo from '../assets/Logo.png';
import SearchBar from './SearchBar';
import EmployeeDetails from './EmployeeDetails';
import axios from 'axios';

import {
  Container,
  TableFunc,
  TableContainer,
  StyledTable,
  TableHeader,
  TableRow,
  TableCell,
  TableImage,
  ArrowButton, 
} from '../styles/TableStyles';

const Table = () => {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [expandedRows, setExpandedRows] = useState({}); 

  useEffect(() => {
    axios.get('http://localhost:3001/employees')
      .then(response => {
        setEmployees(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro ao buscar dados:', error);
        setError('Erro ao carregar os dados');
        setLoading(false);
      });
  }, []);

  const toggleDetails = (id) => {
    setExpandedRows(prevState => ({
      ...prevState,
      [id]: !prevState[id] 
    }));
  };

  const filteredEmployees = employees.filter(employee => 
    employee.job.toLowerCase().includes(search.toLowerCase()) ||
    employee.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <Container>
        <img src={Logo} alt='logo' />
      </Container>
  
      <TableContainer>
        <TableFunc>
          <h2>Funcionários</h2>
          <SearchBar search={search} setSearch={setSearch} />
        </TableFunc>

        <StyledTable>
          <TableHeader>
            <tr>
              <th>Foto</th>
              <th>Nome</th>
              <th>Cargo</th>
              <th>Data de Admissão</th>
              <th>Telefone</th>
            </tr>
          </TableHeader>
         <>
            {filteredEmployees.length > 0 ? (
              filteredEmployees.map(employee => (
                <>
                  <TableRow key={employee.id}>
                    <TableCell><TableImage src={employee.image} alt={employee.name} /></TableCell>
                    <TableCell>
                      {employee.name}
                      <ArrowButton onClick={() => toggleDetails(employee.id)}>
                        {expandedRows[employee.id] ? '∧' : '∨'} 
                      </ArrowButton>
                    </TableCell>
                    <TableCell>{employee.job}</TableCell>
                    <TableCell>{new Date(employee.admission_date).toLocaleDateString()}</TableCell>
                    <TableCell>{employee.phone}</TableCell>
                  </TableRow>

                
                  {expandedRows[employee.id] && (
                    <TableRow className="mobile-details">
                      <TableCell colSpan="5">
                        <EmployeeDetails employee={employee} />
                      </TableCell>
                    </TableRow>
                  )}
                </>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan="5">Nenhum funcionário encontrado</TableCell>
              </TableRow>
            )}
      </>
        </StyledTable>
      </TableContainer>
    </>
  );
};

export default Table;
