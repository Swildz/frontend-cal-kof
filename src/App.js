import { useState } from "react";
import { Login } from "./pages/login/login.pages";
import { Register } from "./pages/register/register.page";
import "./Style.css";

function App() {
  const [currentForm, setCurrentForm] = useState('login')

  const toggleForm = (formName) => {
    setCurrentForm(formName)
  }
  return (
    <div className="App">
      {
        currentForm === 'login'? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
      }
    </div>
  );
}

export default App;
