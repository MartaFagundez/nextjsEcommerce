import Link from "next/link";
import Layout from "../components/Layout";

export default function Products() {

  return (
    <Layout >
      <Link className="bg-blue-700 text-white py-2 px-4 rounded-lg " href={"/products/new"}>
        Add new product
      </Link>
    </Layout>
  );
}