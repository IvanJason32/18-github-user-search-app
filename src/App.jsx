import "./App.css";
import CardInformation from "./components/CardInformation";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import { useFetch } from "./hooks/useFetch";
import { useThemeContext } from "./hooks/useThemeContext";
import { useState, useEffect } from "react";

function App() {
  const { isDark } = useThemeContext();
  const [username, setUsername] = useState("octocat");

  const handleUserNameChange = (username) => {
    setUsername(username);
  };

  const {data, isPending, error, getData} = useFetch();

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        await getData(username);
      } catch (error) {
        console.error("Error fetching initial data:", error);
      }
    };
    fetchInitialData();
  }, [username]);

  console.log("Is pending:", isPending)
  console.log("data: ", data)

  return (
    <div className={`container ${isDark ? "dark" : "light"}`}>
      <div className="principal">
        <Header />
        <SearchBar onUserNameChange={handleUserNameChange} isFound={error} />
        <CardInformation userData={data} isPending={isPending} isFound={error}/>
      </div>
    </div>
  );
}

export default App;
