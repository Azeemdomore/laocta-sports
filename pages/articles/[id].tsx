import { NextPage } from "next";
import React from "react";
import Layout from "@/components/layouts/Layout";
import Article from "@/components/Articles";

const ArticlePage: NextPage = () => {
  return (
    <Layout title="Articles">
      <Article />
    </Layout>
  );
};

export default ArticlePage;
