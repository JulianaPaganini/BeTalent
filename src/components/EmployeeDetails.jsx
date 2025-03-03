import styled from "styled-components";

const EmployeeDetails = ({ employee }) => {
  return (
    <DetailsContainer>
      <p>
        <strong>Cargo:</strong> {employee.job}
      </p>
      <p>
        <strong>Admissão:</strong>{" "}
        {new Date(employee.admission_date).toLocaleDateString()}
      </p>
      <p>
        <strong>Telefone:</strong> {employee.phone}
      </p>
    </DetailsContainer>
  );
};

const DetailsContainer = styled.div`
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 5px;
  margin-top: 5px;
`;

export default EmployeeDetails;
