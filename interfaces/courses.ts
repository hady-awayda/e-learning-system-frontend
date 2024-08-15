export type Course = {
  id: string;
  name: string;
  description: string;
  students: string[];
  created_at: string;
  created_by: string;
};

export type CoursesProps = Course[];

export type ReduxWrapperProps = {
  children: React.ReactNode;
  courses: CoursesProps;
};
