import { parseStringToDateFormat } from '@/utils/DateUtils';
import React from 'react';

import { Container } from './styles';

interface Props {
  datebegin: string;
  dateend?: string;
}

const Period: React.FC<Props> = ({ datebegin, dateend }) => {
  return (
    <Container>
      <span>{parseStringToDateFormat(datebegin)}</span>
      <span>-</span>
      <span>{dateend ? parseStringToDateFormat(dateend) : 'Atual'}</span>
    </Container>
  );
};

export default Period;
