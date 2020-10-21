import Prismic from 'prismic-javascript';

import { Document } from 'prismic-javascript/types/documents';
import { client } from '@/lib/prismic';

export const fetcher = async (
  document: string,
  otherQueries: string[] = [],
): Promise<Document[]> => {
  const data = await client().query([
    Prismic.Predicates.at('document.type', document),
    ...otherQueries,
  ]);

  client()
    .query([Prismic.Predicates.at('document.type', document), ...otherQueries])
    .catch(err => {
      console.warn('err', err);
    });

  return data.results;
};

export const fetcherByUID = async (
  document: string,
  slug: string,
): Promise<Document> => {
  const data = await client().getByUID(document, slug, {});

  return data;
};
