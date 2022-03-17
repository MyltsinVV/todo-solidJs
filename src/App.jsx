import styles from './App.module.css';
import {Route, Routes, Link} from "solid-app-router";
import {lazy} from "solid-js";

const Users = lazy(() => import('./pages/Users'));
const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (<div class={styles.App}>
    <h1>Awesome Site</h1>
    <Link class="nav" href="/">
      Home
    </Link>
    <Link class="nav" href="/users">
      Users
    </Link>
    <Routes>
      <Route path="/users" element={<Users />} />
      <Route path="/" element={<Home />} />
      <Route path="/*all" element={<NotFound />} />
    </Routes>
  </div>);
}

export default App;
