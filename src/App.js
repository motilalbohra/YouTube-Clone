import './App.css';
import Header from './component/Header/Header';
import RecommendedVideos from './component/Recommeneded/RecommendedVideo';
import Sidebar from './component/SideBar/SideBar';
import { BrowserRouter as Router , Switch , Route } from "react-router-dom"
import SearchPage from './component/Search/SearchPage';

function App() {
  return (
    // BEM class naming convention 
    <div className="app">
      <Router>
      <Header />
        <Switch>
          <Route path="/search/:search">
          <div className="app__page">
               <Sidebar />
               <SearchPage />
          </div>
          </Route>
          <Route path="/">
          <div className="app__page">
               <Sidebar />
               <RecommendedVideos />
          </div>
          </Route>
        </Switch>
      </Router>
      {/*
 */}

    </div>
  );
}

export default App;
