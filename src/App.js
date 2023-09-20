import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import MainComponent from "./Components/MainComponent/MainComponent";
import { UserProvider } from "./Shared/js/user-context";

function App() {
  // window.adobeDataLayer = window.adobeDataLayer || [];
  // window.adobeDataLayer.push({
  //   "userInfo" : {
  //     "id" : null,
  //     "email" : null,
  //     "firstName" : null,
  //     "lastName" : null
  //   },
  // });
  let script = document.createElement("script");
  script.setAttribute("src", "adobe-client-data-layer.min.js")
  script.async = true;
  script.defer = true;
  document.head.appendChild(script)
  return (
    <BrowserRouter>
      <div className="App">
        <UserProvider>
          <MainComponent />
        </UserProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
