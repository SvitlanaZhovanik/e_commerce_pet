import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.E_COMMERCE_URL!);
const clientPromise = client.connect();

export const getDB = async () => {
  return (await clientPromise).db(process.env.E_COMMERCE_NAME!);
};
