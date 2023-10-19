import FooterPage from "@/components/Home/Footer/Footer";
import Navbar from "@/components/Home/Navbar/Navbar";

const RootLayout = ({ children }: any) => {
  return (
    <div>
      <Navbar />

      <div className="min-h-screen">{children}</div>

      <FooterPage />
    </div>
  );
};
export default RootLayout;
