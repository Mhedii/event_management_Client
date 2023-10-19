import RootLayout from "@/Layouts/RootLayout";
import HomePage from "@/components/Home/HomePage";
import LoginPage from "./login/page";
import { Children } from "react";

export default function Home({ children }) {
  return (
    <main className="  ">
      <RootLayout>{Children}</RootLayout>
    </main>
  );
}
