
import './App.css';
import List from './components/List';
import TablaAnterior from './components/TablaAnterior';
function App() {
  return (
    <div className="App">
      <h1 className='tex-center'>Listado Anterior</h1>
      <TablaAnterior/>
      <br/>
      <br/>
      <h1 className='tex-center'>Listado</h1>
      <List/>
    </div>
  );
}

export default App;
