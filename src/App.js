import { useState } from "react";
import { StyledMain, StyledWrap } from "./App.styled";
import { BicycleForm } from "./components/BicycleForm/BicycleForm";
import { Bicycles } from "./components/Bicycles/Bicycles";
import { Header } from "./components/Header/Header";
import { Statistics } from "./components/Statistics/Statistics";
import { Footer } from "./components/Footer/Footer";

function App() {
  const [data, setData] = useState([]);
  const [bicycles, setBicycles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Header />
      <StyledMain>
        <StyledWrap className="container">
          <Bicycles
            data={data}
            setData={setData}
            bicycles={bicycles}
            setBicycles={setBicycles}
            error={error}
            setError={setError}
            loading={loading}
            setLoading={setLoading}
          />
          <div>
            <BicycleForm
              data={data}
              setLoading={setLoading}
              setBicycles={setBicycles}
              setError={setError}
            />
            <Statistics data={data} setData={setData} />
          </div>
        </StyledWrap>
      </StyledMain>
      <Footer />
    </>
  );
}

export default App;
