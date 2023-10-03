import styled from 'styled-components';

export const Table = styled.table`
  display: flex;
  flex-direction: column;
`;
export const TabletHead = styled.thead`
  margin-bottom: 16px;
  & tr {
    display: flex;
    padding: 3px;
    gap: 15px;
    & th:nth-child(1) {
      width: 200px;
      word-wrap: break-word;
    }
    & th:nth-child(2) {
      width: 150px;
      word-wrap: break-word;
    }
    & th:not(:last-child) {
      border-bottom: 3px solid #1035ac;
    }
  }
`;

export const TableBody = styled.tbody`
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-align: center;
`;

export const ItemRow = styled.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px;
  & td {
    padding-bottom: 5px;
  }
  & td:nth-child(1) {
    width: 200px;
    word-wrap: break-word;
  }
  & td:nth-child(2) {
    width: 150px;
    word-wrap: break-word;
  }
  & td:nth-child(3) {
    & button {
      text-transform: uppercase;
      font-size: 15px;
      padding: 3px;
      border-radius: 5px;
      cursor: pointer;
      background-color: #ed2939;
      color: white;
      font-weight: 600;
      &:is(:focus, :hover) {
        color: white;
        background-color: #b11226;
      }
    }
  }
  & td:not(:last-child) {
    border-bottom: 3px dashed #1035ac;
  }
`;
