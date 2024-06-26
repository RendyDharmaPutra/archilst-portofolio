import { Db, MongoClient } from "mongodb";

async function dbconnect(): Promise<{
	db: Db;
	client: MongoClient;
}> {
	const uri: string =
		"mongodb+srv://archilst:rendydp424@basic.xol0yrs.mongodb.net/?retryWrites=true&w=majority;";
	const client: MongoClient = new MongoClient(uri);

	await client.connect();

	const db: Db = client.db("nextjs");

	return { db, client };
}

export async function getData(collection: string) {
	const { db, client } = await dbconnect();

	const data = await db.collection(collection).find().toArray();

	client.close();

	return data;
}
