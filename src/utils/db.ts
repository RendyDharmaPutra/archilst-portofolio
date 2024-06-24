import { MongoClient } from 'mongodb';

export async function dbconnect() {
  const uri =
    'mongodb+srv://archilst:rendydp424@basic.xol0yrs.mongodb.net/?retryWrites=true&w=majority';
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await client.connect();

  const db = client.db('nextjs');

  return { db, client };
}
