import './App.css'
import CategoriesComponent from './components/Categories/Categories';
import Heros from './components/Hero-section/Heros'
import Navbar from './components/Navbar/Navbar'
import Collab from "./components/product-colab/Collab";
import Courses from './components/product-colab/Courses/Courses';




function App() {
 

  return (
      <>
          <div>
              <Navbar />
              <Heros />
              <Collab />
              <Courses />
              <CategoriesComponent />
          </div>
      </>
  );
}

export default App
