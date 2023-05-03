import Header from "../components/organisms/Header";

const MainLayout = ({children}) => {
    return (
      <>
        <Header />
        <main>{children}</main>
      </>
    );
  };
  
  export default MainLayout;