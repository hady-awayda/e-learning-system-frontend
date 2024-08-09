export type Course = {
  id: string;
  name: string;
};

export type ReduxWrapperProps = {
  children: React.ReactNode;
  courses: Course[];
};

export type CoursesProps = {
  courses: Course[];
};
