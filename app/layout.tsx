import type { Metadata } from "next";
import "./globals.css";
import ReduxWrapper from "../components/ReduxWrapper";
import fetchCourses from "@/data/remote/courses/read";

export const metadata: Metadata = {
  title: "E-learning System",
  description: "Created by Hady Awayda",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const courses = await fetchCourses();

  return (
    <html lang="en">
      <body>
        <ReduxWrapper courses={courses}>{children}</ReduxWrapper>
      </body>
    </html>
  );
}
