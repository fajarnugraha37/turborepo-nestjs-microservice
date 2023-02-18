import { ApplicationCard, LoginForm, Button } from "ui";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import Layout from "../../components/layout/Layout";
import MainLayout from "../../components/layout/MainLayout";
import Seo from "../../components/Seo";

export default function AboutUsIndexPage() {
  return (
    <Layout>
      <Seo templateTitle='About Us' />
      <Header />
      <MainLayout>
        <section className='bg-white'>
          <h1>Web</h1>
          <Button />
          <ApplicationCard />
          <LoginForm />
        </section>
      </MainLayout>
      <Footer />
    </Layout>
  );
}
