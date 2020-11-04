import { renderHTMLText } from '@/utils/HTMLUtils';
import { Container } from './styles';

interface Props {
  role: string[];
  company: string[];
}

const Header: React.FC<Props> = ({ role, company }) => {
  return (
    <Container>
      {renderHTMLText(role)}
      <h2>-</h2>
      {renderHTMLText(company)}
    </Container>
  );
};

export default Header;
