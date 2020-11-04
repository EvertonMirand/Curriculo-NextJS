import { parseStringToDateFormat } from '@/utils/DateUtils';
import { renderHTMLText } from '@/utils/HTMLUtils';

import { Document } from 'prismic-javascript/types/documents';
import Header from './Header';
import Period from './Period';

import { Container } from './styles';

interface ProfessionalExperienceProps {
  experiences: Document[];
}

const ProfessionalExperience: React.FC<ProfessionalExperienceProps> = ({
  experiences,
}) => {
  return (
    <Container>
      <h1>Experiência Profissional</h1>
      {experiences.map(
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
            <div>
              <h3>Responsabilidades</h3>
              {renderHTMLText(responsibilities)}
            </div>
            <div>
              <h3>Principais Realizações</h3>
              {renderHTMLText(achievements)}
            </div>
          </div>
        ),
      )}
    </Container>
  );
};

export default ProfessionalExperience;
