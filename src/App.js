import { useEffect, useState } from "react";
import { StyledMain, StyledWrap } from "./App.styled";
import { BicycleForm } from "./components/BicycleForm/BicycleForm";
import { Bicycles } from "./components/Bicycles/Bicycles";
import { Header } from "./components/Header/Header";
import { Statistics } from "./components/Statistics/Statistics";
import { Footer } from "./components/Footer/Footer";
import { getBicycles } from "./services/api";
import { Loader } from "./components/Loader/Loader";

function App() {
  const [bicycles, setBicycles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSearch = async () => {
      setLoading(true);
      try {
        const response = await getBicycles();
        setBicycles(response.data.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchSearch();
  }, [setBicycles, setError, setLoading]);
  return (
    <>
      <Header />
      <StyledMain>
        <StyledWrap className="container">
          {loading && !error && <Loader />}
          {bicycles.length > 0 && !loading && !error && (
            <Bicycles
              bicycles={bicycles}
              setBicycles={setBicycles}
              error={error}
              setError={setError}
              loading={loading}
              setLoading={setLoading}
            />
          )}
          <div>
            <BicycleForm setBicycles={setBicycles} bicycles={bicycles} />
            <Statistics bicycles={bicycles} />
          </div>
        </StyledWrap>
      </StyledMain>
      <Footer />
    </>
  );
}

export default App;
