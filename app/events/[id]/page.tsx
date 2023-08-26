import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";

export default async function EventView({params: {id}}: {params: {id: string}}) {
  const supabase = createServerComponentClient<Database>({cookies});
  const {data} = await supabase.from("events").select().match({id}).single();

  console.log(data);

  return <div>esto es id: {id}</div>;
}
