import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/structural/Header";
import Footer from "@/components/structural/Footer";
import { Provider } from "react-redux";
import store from "@/data/redux/store";

export const metadata: Metadata = {
  title: "E-learning System",
  description: "Create by Hady Awayda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
