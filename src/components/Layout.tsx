import Head from "next/head";
import Header from "./Header";
// import Navbar from "./navbar";
import Modal from "./Modal";

import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen overflow-y-scroll bg-lstone transition-all dark:bg-black">
      <Head>
        <title>Feed | Makutano</title>
      </Head>
      <Header />
      {/* <Navbar /> */}
      <div className="px-4">
        <div className="mx-auto my-6">
          <Sidebar />
          {children}
          <aside className="fixed right-4 top-20 mt-0 block w-[325px] h-[80vh] overflow-y-auto md:hidden lg:block">
            <Widgets />
          </aside>
        </div>
      </div>
      <Modal />
    </div>
  );
}
