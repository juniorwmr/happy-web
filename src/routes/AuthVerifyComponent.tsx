import { withRouter, RouteComponentProps } from 'react-router-dom';
import { getToken, jwtDecoded, logout } from '../services/auth';

const AuthVerifyComponent: React.FC<RouteComponentProps> = ({ history }) => {
  history.listen(() => {
    const token = getToken();
    if (token) {
      const decoded = jwtDecoded(token);
      if (decoded.exp * 1000 < Date.now()) {
        localStorage.clear();
        logout();
      } else {
        return;
      }
    }
  });
  return null;
};

export default withRouter(AuthVerifyComponent);
