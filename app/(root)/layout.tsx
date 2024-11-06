import { ReactNode } from "react";
import NavBar from "../../components/NavBar";

export default function Layout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <main className="font-work-sans">
      <NavBar />
      {children}
    </main>
  );
}
