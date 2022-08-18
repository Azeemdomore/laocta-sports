import type { NextPage } from "next";
import Layout from "@/components/layouts/Layout";
import Home from "@/components/Home";

const HomePage: NextPage = () => {
  return (
    <Layout title="Home page">
      <Home />
    </Layout>
  );
};

export default HomePage;
