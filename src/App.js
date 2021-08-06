
import C01componente from './Components/C01componente';
import Aside from './sitioweb/Aside';
import { Cardtarjeta } from './sitioweb/Cardtarjeta';
import Carrusel from './sitioweb/Carrusel';
import Header from './sitioweb/Header';
import { Menunav } from './sitioweb/Menunav';
import Piedep from './sitioweb/Piedep';
import Video from './sitioweb/Video';

function App() {
  return (
    <div className="container">
      
      <header className="row bg-secondary">
		    <Header />
      </header>

      <nav className="row bg-warning">
        <Menunav />
      
     </nav>
     <section className="row bg-primary">
       <article className="col-md-6 bg-warning">
       <Carrusel />

    </article>
     <article className="col-md-4 bg-secondary">
       <Cardtarjeta />
    
     </article>
     <aside className="col-md-2 bg-primary">
     <Aside />
    </aside>
    </section>
      <footer className="row bg-dark text-light">
        <Piedep /> 

    </footer>

    </div>

  
  );
}

export default App;
