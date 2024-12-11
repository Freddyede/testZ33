import 'dotenv/config';

const getAllClientOrigin = (
  clientOrigin: string,
  array: string[],
): string[] => {
  array.push(clientOrigin);
  array.push(clientOrigin + '/*');
  return array;
};

interface ICors {
  cors: {
    origin: string[] | null;
    allowedHeaders: string[] | null;
    methods: string[] | null;
  };
}

export const getCors: () => ICors = (): ICors => {
  const array: string[] = [];
  getAllClientOrigin(process.env.WEB_CLIENT, array);
  return {
    cors: {
      origin: array,
      allowedHeaders: [
        'Origin',
        'X-Requested-With',
        'Content-Type',
        'Authorization',
      ],
      methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    },
  };
};
