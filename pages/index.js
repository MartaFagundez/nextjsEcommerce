import { useSession } from "next-auth/react";
import Layout from "../components/Layout";

export default function Home() {
  const {data: session} = useSession();

  if (!session) return;

  return (
    <Layout >
      <div className="text-blue-800 flex justify-between">
        <h2>
          Hello, <b>{session.user.name}</b>!
        </h2>
        <div className="flex text-gray-900 bg-gray-200 rounded-lg overflow-hidden">
          <img src={session.user.image} alt="" className="w-8 h-8" />
          <span className="px-2 py-1">{session.user.name}</span>
        </div>
      </div>
    </Layout>
  );
}
