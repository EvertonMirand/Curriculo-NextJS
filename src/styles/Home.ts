import styled from 'styled-components';

export const Container = styled.div`
  background: var(--background);
  display: flex;

  line-height: 2rem;
  justify-content: center;

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
