"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/data/redux/store";

function Home() {
  const courses = useSelector((state: RootState) => state.course.courses);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {courses?.map((course, index) => (
        <div key={index}>{course.name}</div>
      ))}
    </main>
  );
}

export default Home;
