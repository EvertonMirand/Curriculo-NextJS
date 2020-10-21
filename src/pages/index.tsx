import { Document } from 'prismic-javascript/types/documents';
import Header from '../components/Header';
import { Container } from '../styles/Home';
import { fetcher } from '../services/PrismicService';
import { GetStaticProps } from 'next';

interface HomeProps {
  header?: Document;
}

const Home: React.FC<HomeProps> = ({ header }) => {
  if (!header) {
    return <div>Carregando...</div>;
  }
  return (
    <Container>
      <Header data={header} />
    </Container>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const headers = await fetcher('header');

  console.warn(headers[0].data);

  return {
    props: {
      header: headers[0],
    },
  };
};

export default Home;
