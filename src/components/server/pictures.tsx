import { dbconnect } from '@/utils/db';

import Picture from '@/components/picture';

export default async function Pictures() {
  const { db, client } = await dbconnect();

  const data = await db.collection('photograph').find().toArray();

  client.close();

  return (
    <div className='pt-4 px-4 w-[22rem] md:w-[43rem] lg:w-[54rem] 2xl:min-w-[78rem] 2xl:w-full lg:pt-8 lg:px-8 flex flex-wrap flex-row justify-center md:justify-between rounded-xl shadow-lg bg-white'>
      {/* <Picture src='https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80' />
      <Picture src='https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80' />
      <Picture src='https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80' />
      <Picture src='https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80' />
      <Picture src='https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80' /> */}

      {data.map(({ img }) => {
        return <Picture src={img} />;
      })}

      {/* {JSON.stringify(data)} */}
    </div>
  );
}
