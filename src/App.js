import { useState } from "react";
import { StyledMain, StyledWrap } from "./App.styled";
import { BicycleForm } from "./components/BicycleForm/BicycleForm";
import { Bicycles } from "./components/Bicycles/Bicycles";
import { Header } from "./components/Header/Header";
import { Statistics } from "./components/Statistics/Statistics";
import { Footer } from "./components/Footer/Footer";

function App() {
  const [data, setData] = useState([]);
  console.log(data);
  return (
    <>
      <Header />
      <StyledMain>
        <StyledWrap className="container">
          <Bicycles data={data} setData={setData} />
          <div>
            <BicycleForm data={data} />
            <Statistics data={data} />
          </div>
        </StyledWrap>
      </StyledMain>
      <Footer />
    </>
  );
}

export default App;
