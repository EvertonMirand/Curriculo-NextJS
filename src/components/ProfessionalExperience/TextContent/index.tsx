import { renderHTMLText } from '@/utils/HTMLUtils';
import { readText } from '@/utils/PrismicUtils';

import { Container } from './styles';

interface Props {
  data: string[];
  title: string;
}

const TextContent: React.FC<Props> = ({ data, title }) => {
  const Data = () => renderHTMLText(data);

  return readText(data) ? (
    <Container>
      <h3>{title}</h3>
      <Data />
    </Container>
  ) : null;
};

export default TextContent;
