"use client";

import Footer from "./footer/footer";
import Header from "./header/header";
import Main from "./main/main";
import { AuthContextProvider } from "./Auth/auth";

export default function Home() {
  return (
    <>
      <AuthContextProvider>
        <Header />
        <Main />
        <Footer />
      </AuthContextProvider>
    </>
  );
}
