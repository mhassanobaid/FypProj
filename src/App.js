
import './App.css';
import SignUpForm from './Components/Admin/SignUpForm';
import Footer from './Components/LandingPage/headerFooterComp/Footer';
import Header from './Components/LandingPage/headerFooterComp/Header';
import SearchBar from './Components/LandingPage/SearchBar';
function App() {

  
    const handleSearch = (searchCriteria) => {
      // Handle the search criteria, e.g., make an API call
      console.log('Search Criteria:', searchCriteria);
    };

  return (
    <div className="App">
    {/*<SignUpForm/>*/}

    
            {/* Your main content goes here */}
            <Header/>
            <SearchBar className="search-bar-of-App" onSearch={handleSearch} />
            <main>
                <p>This is the main content of your website.</p>
            </main>
            <Footer />
    </div>
  );
}

export default App;
