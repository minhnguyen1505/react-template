import HomePage from "../containers/HomePage/HomePage";
import Meeting from "../containers/Meeting/Meeting";

const authRoutes = [
  {
    component: HomePage,
    path: "/"
  },
  {
    component: Meeting,
    path: "/meeting"
  }
];

export default authRoutes;
