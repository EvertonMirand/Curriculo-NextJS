import ReactHtmlParser from 'react-html-parser';
import { readHTML } from './PrismicUtils';

export const renderHTMLText = (content: any[]) => ReactHtmlParser(readHTML(content));
