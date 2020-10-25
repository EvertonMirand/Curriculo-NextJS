import { renderHTMLText } from '@/utils/HTMLUtils';

import { format, parseISO } from 'date-fns';

import { ptBR } from 'date-fns/locale';

import { Document } from 'prismic-javascript/types/documents';

import { Container } from './styles';

interface ProfessionalExperienceProps {
  experiences: Document[];
}

const ProfessionalExperience: React.FC<ProfessionalExperienceProps> = ({
  experiences,
}) => {
  console.warn(experiences);
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
            <div>
              {renderHTMLText(role)}
              {renderHTMLText(company)}
            </div>
            <div>
              <span>
                {format(parseISO(datebegin), 'MMM yyyy', { locale: ptBR })}
              </span>
              <span>
                {dateend
                  ? format(parseISO(dateend), 'MMM', { locale: ptBR })
                  : 'Atual'}
              </span>
            </div>
            <div>
              <span>Responsabilidades</span>
              {renderHTMLText(responsibilities)}
            </div>
            <div>
              <span>Principais Realizações</span>
              {renderHTMLText(achievements)}
            </div>
          </div>
        ),
      )}
    </Container>
  );
};

export default ProfessionalExperience;
