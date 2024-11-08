import { ReactNode } from "react";
import NavBar from "../../components/NavBar";
import Footer from "@/components/Footer";

export default function Layout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <main className="font-work-sans">
      <NavBar />
      {children}
      <Footer />
    </main>
  );
}
