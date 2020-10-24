import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  background: var(--primary-color);
  color: var(--primary-text) !important;
  justify-content: space-around;
  max-width: 1000px;
`;

export const Data = styled.div.attrs({ className: 'data' })`
  display: flex;
  flex-direction: column;
  margin: 10px;

  img {
    height: 100px;
    width: 100px;
    border-radius: 50%;
  }

  a {
    color: #ccc;
    text-align: center;
  }
`;
