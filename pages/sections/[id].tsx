import { NextPage } from "next";
import React from "react";
import Layout from "@/components/layouts/Layout";
import Sections from "@/components/Sections";

const SectionsPage: NextPage = () => {
  return (
    <Layout title="Sections Page">
      <Sections />
    </Layout>
  );
};

export default SectionsPage;
