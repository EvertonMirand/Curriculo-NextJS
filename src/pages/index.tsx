import { Document } from 'prismic-javascript/types/documents';
import Header from '../components/Header';
import { Container } from '../styles/Home';
import { fetcher } from '../services/PrismicService';
import { GetStaticProps } from 'next';

interface HomeProps {
  headers?: Document[];
}

const Home: React.FC<HomeProps> = ({ headers }) => {
  console.warn(headers);
  if (!headers) {
    return <div>Carregando...</div>;
  }
  return (
    <Container>
      <Header data={headers} />
    </Container>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const headers = await fetcher('header');
  console.warn(headers);
  return {
    props: {
      headers,
    },
    revalidate: 2,
  };
};

export default Home;
