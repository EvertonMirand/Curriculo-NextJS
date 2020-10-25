import { Document } from 'prismic-javascript/types/documents';
import Header from '../components/Header';
import { Container, Objective } from '../styles/Home';
import { fetcher } from '../services/PrismicService';
import { GetStaticProps } from 'next';
import ProfessionalExperience from '@/components/ProfessionalExperience';

interface HomeProps {
  headers?: Document[];
  professionalExperience?: Document[];
}

const Home: React.FC<HomeProps> = ({ headers, professionalExperience }) => {
  if (!headers) {
    return <div>Carregando...</div>;
  }
  return (
    <Container>
      <Header data={headers} />
      <Objective>
        <h2>Objetivo</h2>
        <span>Desenvolvimento de software, área especifica em mobile/web.</span>
      </Objective>
      <ProfessionalExperience experiences={professionalExperience} />
    </Container>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const headers = await fetcher('header');
  const professionalExperience = await fetcher('professional-experience');

  return {
    props: {
      headers,
      professionalExperience,
    },
    revalidate: 2,
  };
};

export default Home;
