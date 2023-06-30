import { BrowserRouter, Route, Routes} from "react-router-dom";
// import axios from "axios";
import { FirebaseAppProvider } from "reactfire"; 
import './App.css';


/* Profile Management */
import Home from "./components/Dashboard/Home"
// import Profile from "./components/UserProfileManagement/Profile";
import ProfileWrapper from "./components/UserProfileManagement/Profile";
import ProfileDetails from "./components/UserProfileManagement/ProfileDetails";

function App() {

  return (
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />

        {/* Module : User Profile Management start */}
        <Route path="/Profile" element={<ProfileWrapper />} />
        <Route path="/Profile/ProfileDetails" element={<ProfileDetails />} />
        {/* User Profile Management end */}
      </Routes>
    </BrowserRouter>
  // </FirebaseAppProvider>
  );
}

export default App;
