import styled from 'styled-components';

export const Container = styled.div`
  background: var(--background);
  display: flex;

  flex-direction: column;

  line-height: 2rem;
  align-items: center;

  ul,
  ol {
    list-style: initial;
  }

  > div {
    align-items: center;
    color: var(--secondary-text);

    padding: 1rem;

    text-align: justify;

    h1 {
      font-size: 2rem;
    }

    p,
    strong,
    a {
      font-size: 1rem;
    }
  }
`;

export const Objective = styled.div.attrs({ className: 'objective' })`
  h2 {
    border-bottom: 1px solid var(--secondary-text);
  }

  h2,
  span {
    margin-bottom: 10px;
  }

  border-bottom: 1px solid var(--secondary-text);
`;
