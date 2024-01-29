import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import ROUTES from './routes';
import App from '../App';
import Home from '../pages/Home';
import Favourites from '../pages/Favourites';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTES.HOME} element={<App />}>
      <Route index element={<Home />}></Route>
      <Route path={ROUTES.FAVOURITES} element={<Favourites />}></Route>
    </Route>
  )
);

export default router;
