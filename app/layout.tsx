export const runtime = "edge";

import type { Metadata } from "next";
import "./globals.css";
import ReduxWrapper from "../components/layout/ReduxWrapper";
import { Suspense } from "react";
import { CoursesProps } from "@/interfaces/courses";
import request from "@/utils/request";

export const metadata: Metadata = {
  title: "E-learning System",
  description: "Created by Hady Awayda",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { courses } = (await request("/courses", "GET")) as {
    courses: CoursesProps;
  };

  return (
    <html lang="en">
      <body>
        <Suspense fallback={<div>Loading...</div>}>
          <ReduxWrapper courses={courses}>{children}</ReduxWrapper>
        </Suspense>
      </body>
    </html>
  );
}
