import { Document } from 'prismic-javascript/types/documents';
import ReactHtmlParser from 'react-html-parser';

import { readHTML } from '../../utils/PrismicUtils';
import { Container } from './styles';

interface HeaderProps {
  data: Document;
}

const Header: React.FC<HeaderProps> = ({ data: { data } }) => {
  return (
    <Container>
      <div>{ReactHtmlParser(readHTML(data.content))}</div>
    </Container>
  );
};

export default Header;
