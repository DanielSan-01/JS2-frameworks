import { Header } from "./components/header/Header";
import { Footer } from "./components/Footer";

export function Layout({ children }) {

  return (
   <>
    <Header/>
    <main className="grow">{children}</main>
    <Footer />
   </>
  );
}