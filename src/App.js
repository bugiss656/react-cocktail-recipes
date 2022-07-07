import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Homepage from './pages/HomePage/HomePage'
import Logo from './components/Logo/Logo'
import SearchBar from './components/SearchBar/SearchBar'
import CategoriesDropdown from './components/CategoriesDropdown/CategoriesDropdown'
import DrinksListPage from './pages/DrinksListPage/DrinksListPage'
import RandomDrinkPage from './pages/RandomDrinkPage/RandomDrinkPage'
import RandomDrink from './components/RandomDrink/RandomDrink'
import DrinkOverviewPage from './pages/DrinkOverviewPage/DrinkOverviewPage'
import IngredientOverviewPage from './pages/IngredientOverviewPage/IngredientOverviewPage'
import SearchResultsPage from './pages/SearchResultsPage/SearchResultsPage'
import PDFDocumentPage from './pages/PDFDocumentPage/PDFDocumentPage'



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar>
          <Logo />
          <CategoriesDropdown />
          <RandomDrink />
          <SearchBar />
        </Navbar>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/category/recipes/:category" element={<DrinksListPage />} />
          <Route path="/drinks/:id" element={<DrinkOverviewPage />} />
          <Route path="/ingredients/:name" element={<IngredientOverviewPage />} />
          <Route path="/search/:query" element={<SearchResultsPage />} /> 
          <Route path="/random-drink" element={<RandomDrinkPage />} />
          <Route path="/pdf-view" element={<PDFDocumentPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
