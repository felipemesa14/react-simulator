import {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

    const [total] = useState(50000);
    const [store] = useState("5d9b86cd84c9d000019a9c7c");

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://stonprdeu2appsimulator.blob.core.windows.net/integraciones-qa/simulator/simulator.js";
        script.async = true;

        document.body.appendChild(script);

    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>

                <p><strong>Valor Producto:</strong> {total}</p>

                <app-simulator store={store} total={total}></app-simulator>

                <p>Simulador de crédito para Sistecrédito en React.js</p>
            </header>
        </div>
    );
}

export default App;
