import styled from 'styled-components'

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #231b17;

  & th,
  & td {
    padding: 8px;
    text-align: left;
  }

  & thead {
    background: #231b17;
    font-variant: all-small-caps;
    font-size: 1.1em;
    color: white;

    & th:not(:last-of-type) {
      border-right: 1px solid #b4aaa4;
    }
  }

  & tr.row {
    cursor: pointer;

    &:hover {
      filter: brightness(1.03);
    }
  }

  & tr.row {
    background: #b4aaa4;
    & td {
      font-size: 1em;
      &:not(:last-of-type) {
        border-right: 1px solid #d5d0cc;
      }
    }
  }

  & tr.row.odd {
    background: #d5d0cc;
    & td:not(:last-of-type) {
      border-right: 1px solid #ddd9d6;
    }
  }

  & tr.details {
    border-bottom: 1px solid #231b17;

    & > td {
      transition: all 0.5s;
      background: #ebe9e7;
    }
  }

  & tbody.light {
    filter: grayscale(75%);

    & > tr {
      filter: brightness(110%);
    }
  }
`
