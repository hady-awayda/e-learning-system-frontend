import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/data/redux/store";
import {
  setName,
  setEmail,
  setRole,
  addCourse,
  removeCourse,
  clearUser,
} from "../../data/redux/userSlice/slice";

const UserProfile = () => {
  const dispatch: AppDispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  const handleSetName = (name: string) => {
    dispatch(setName(name));
  };

  const handleSetEmail = (email: string) => {
    dispatch(setEmail(email));
  };

  const handleSetRole = (role: string) => {
    dispatch(setRole(role));
  };

  const handleAddCourse = (courseId: string) => {
    dispatch(addCourse(courseId));
  };

  const handleRemoveCourse = (courseId: string) => {
    dispatch(removeCourse(courseId));
  };

  const handleLogout = () => {
    dispatch(clearUser());
  };

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
      <p>Courses: {user.courses.join(", ")}</p>
      <button onClick={() => handleSetName("John Doe")}>Set Name</button>
      <button onClick={() => handleSetEmail("john.doe@example.com")}>
        Set Email
      </button>
      <button onClick={() => handleSetRole("Student")}>Set Role</button>
      <button onClick={() => handleAddCourse("courseId1")}>Add Course</button>
      <button onClick={() => handleRemoveCourse("courseId1")}>
        Remove Course
      </button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserProfile;
