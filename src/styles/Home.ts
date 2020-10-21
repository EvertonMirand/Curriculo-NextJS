import styled from 'styled-components';

export const Container = styled.div`
  background: var(--background);
  display: flex;

  line-height: 2rem;

  ul,
  ol {
    list-style: initial;
  }

  > div {
    flex-direction: column;

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

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    > li {
      margin: 1rem;
    }
  }
`;
