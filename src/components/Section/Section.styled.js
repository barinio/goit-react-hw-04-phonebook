import styled from 'styled-components';
export const SectionWrapper = styled.section`
  width: 450px;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-radius: 7px;
  box-shadow: inset #1035ac 0 0 7px;
  background-color: rgba(135, 206, 250, 0.7);
  gap: 16px;

  & h2 {
    color: #1035ac;
    text-align: center;
  }
  &:first-child {
    margin: 25px auto;
  }
`;
