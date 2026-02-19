//importação do bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

//importação do css
import './App.css';

//importação dos componentes
import Navbar from './componets/navbar';
import Categorias from './componets/categorias';

//importação do Material desing Icons
import '@mdi/font/css/materialdesignicons.min.css';





function App() {
  return (
    <div>
      <Navbar />
      <Categorias />
    </div>
  )
}

export default App
