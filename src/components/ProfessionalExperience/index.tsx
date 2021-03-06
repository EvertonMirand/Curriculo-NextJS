import { parseISO, compareDesc } from 'date-fns';

import { Document } from 'prismic-javascript/types/documents';
import Header from './Header';
import Period from './Period';

import { Container } from './styles';
import TextContent from './TextContent';

interface ProfessionalExperienceProps {
  experiences: Document[];
}

const ProfessionalExperience: React.FC<ProfessionalExperienceProps> = ({
  experiences,
}) => {
  const sortedExperiences = experiences.sort(
    ({ data: { datebegin: a } }, { data: { datebegin: b } }) =>
      compareDesc(parseISO(a), parseISO(b)),
  );
  return (
    <Container>
      <h1>Experiência Profissional</h1>
      {sortedExperiences.map(
        ({
          data: {
            achievements,
            company,
            datebegin,
            dateend,
            responsibilities,
            role,
          },
          id,
        }) => (
          <div key={id}>
            <Header company={company} role={role} />
            <Period datebegin={datebegin} dateend={dateend} />
            <TextContent title="Responsabilidades" data={responsibilities} />
            <TextContent title="Principais Realizações" data={achievements} />
          </div>
        ),
      )}
    </Container>
  );
};

export default ProfessionalExperience;
