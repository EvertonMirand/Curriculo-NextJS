import Prismic from 'prismic-javascript';

export const apiEndpoint = process.env.PRISMIC_ENDPOINT;

export const client = (req = null) => {
  const options = {
    accessToken: process.env.PRISMIC_ACESSTOKEN,
    req: req ? req : null,
  };

  return Prismic.client(apiEndpoint, options);
};
