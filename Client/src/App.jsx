import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Cards from "./components/cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import About from "./components/About/About.jsx";
import Favorites from "./components/Favorites/Favorites.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Error from "./components/Error/Error.jsx";
import Form from "./components/Form/Form.jsx";
import WelcomeMessage from "./components/WelcomeMsj/welcomeMsj.jsx";
import { addChar, removedChar } from "./redux/actions.js";
import "./App.css";

function App() {
  const location = useLocation();
  const currentLocation = location.pathname !== "/";
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  // const EMAIL = "didonna@gmail.com";
  // const PASSWORD = "Didonna123";
  const allCharacters = useSelector(state => state.allCharacters);
  const dispatch = useDispatch();

  const login = async userData => {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";
    try {
      const response = await axios.get(URL, {
        params: {
          email,
          password,
        },
      });
      const { access } = response.data;
      setAccess(access);
      access && navigate("/home");
    } catch (error) {
      console.error("Login error:", error);
    }
    // axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
    //   const { access } = data;
    //   setAccess(data);
    //   access && navigate("/home");
    // });
    // if (userData.password === PASSWORD && userData.email === EMAIL) {
    //   setAccess(true);
    //   navigate("/home");
    // }
  };

  const onClose = id => {
    // const filterCharacter = characters.filter(character => character.id !== id);
    // setCharacters(filterCharacter);
    dispatch(removedChar(id));
  };

  // const onSearch = id => {
  //   axios(
  //     `https://rym2.up.railway.app/api/character/${id}?key=pi-{didonna}`
  //   ).then(({ data }) => {
  //     if (data.name) {
  //       if (!characters.some(character => character.id === data.id)) {
  //         setCharacters(oldChars => [...oldChars, data]);
  //         dispatch(addChar(data));
  //       } else {
  //         window.alert("¡El personaje ya está en la pantalla!");
  //       }
  //     } else {
  //       window.alert("¡No hay personajes con este ID!");
  //     }
  //   });
  // };

  const onSearch = async id => {
    const URL = `http://localhost:3001/rickandmorty/character/${id}`;
    try {
      const { data } = await axios(URL);
      console.log(data);
      if (data.name) {
        if (!characters.some(character => character.id === data.id)) {
          setCharacters(oldChars => [...oldChars, data]);
          dispatch(addChar(data));
        } else {
          window.alert("¡El personaje ya está en la pantalla!");
        }
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onRandom = () => {
    const randomId = Math.floor(Math.random() * 826) + 1;
    onSearch(randomId);
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const logout = () => {
    setAccess(false);
  };

  return (
    <div className="App">
      {currentLocation && (
        <Nav
          className="nav-bar"
          onSearch={onSearch}
          onRandom={onRandom}
          onLogout={logout}
        />
      )}
      <Routes className="routes-app">
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={
            <>
              <WelcomeMessage characters={allCharacters} />
              <Cards onClose={onClose} characters={allCharacters} />
            </>
          }
        />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <footer className="footer-app">Create By John Di Donna</footer>
    </div>
  );
}

export default App;
