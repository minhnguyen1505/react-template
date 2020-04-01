import HomePage from "../containers/HomePage/HomePage";
import Meeting from "../containers/Meeting/Meeting";

const authRoutes = [
  {
    component: HomePage,
    path: "/",
    exact: true
  },
  {
    component: Meeting,
    path: "/meeting"
  }
];

export default authRoutes;
