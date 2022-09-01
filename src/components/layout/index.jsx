import Header from "../shared/Header";
import AppBar from "../shared/AppBar";
import Footer from "../shared/Footer";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <AppBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
