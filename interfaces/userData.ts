export type UserProp = {
  name: string;
  email: string;
  role: string;
  courses: string[];
  withdrawals: string[];
  createdAt: string;
};

export type UserProps = UserProp[];

export type CreateUserProps = {
  name: string;
  email: string;
  password: string;
};

export type UserState = {
  name: string | null;
  email: string | null;
  role: string | null;
  courses: string[];
  withdrawals: string[];
  createdAt: string | null;
};
