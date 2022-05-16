import './App.css';
import HomePage  from './pages/home.page'; 
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NewsEventsPage from './pages/news-events.page';
import HomePageContentComponent from './components/home/home-page-content.component';

function App() {
  return (
    <BrowserRouter>  
      <main>
        <Routes>
          <Route path="/" element={<HomePage/>} >
            <Route path="/" element={<HomePageContentComponent/>} />
            <Route path="/newsandevents" element={<NewsEventsPage />} />
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
