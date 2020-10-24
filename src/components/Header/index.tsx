import { Document } from 'prismic-javascript/types/documents';
import ReactHtmlParser from 'react-html-parser';

import { readHTML } from '../../utils/PrismicUtils';
import { Container, Data } from './styles';

interface HeaderProps {
  data: Document[];
}

const Header: React.FC<HeaderProps> = ({ data }) => {
  return (
    <Container>
      {data.map(({ data: header }, index) => (
        <Data key={index}>{ReactHtmlParser(readHTML(header.content))}</Data>
      ))}
    </Container>
  );
};

export default Header;
