import './styles.css'
import QRCode from "react-qr-code";  


function App() {

  return (
    <div className="App"> 
      <h1>Cardapio de Cliente</h1>
      <QRCode value='www.google.com'/>
    </div>

  );
}


export default App
