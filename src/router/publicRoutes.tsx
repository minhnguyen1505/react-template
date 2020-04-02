import FrontPage from '../containers/FrontPage/FrontPage';
import LogIn from '../containers/LogIn/LogIn';
import SignUp from '../containers/SignUp/SignUp';

const publicRoutes = [
  {
    component: FrontPage,
    path: '/welcome',
    exact: true
  },
  {
    component: LogIn,
    path: '/login'
  },
  {
    component: SignUp,
    path: '/signup'
  }
];

export default publicRoutes;
