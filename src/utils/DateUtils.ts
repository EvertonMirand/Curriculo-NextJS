import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export const parseStringToDateFormat = (
  date,
  dateFormat = 'MMM yyyy',
  locale = ptBR,
) =>
  format(parseISO(date), dateFormat, {
    locale,
  });
