import Footer from "@/components/Footer";
import Header from "@/components/Header";

const WithLayout = ({ children }) => {
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  );
};

export default WithLayout;
