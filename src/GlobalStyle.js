const { createGlobalStyle } = require("styled-components");

export const GlobalStyle = createGlobalStyle`
  body {
   font-family: sans-serif;
   margin: 0 auto;    
   font-style: normal;
   font-weight:normal;

  min-height: 100vh;
   &>div{display: flex;
  flex-direction: column;
 height: 100vh;}
   
   
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}
ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
button{
  cursor: pointer;
}
  }
  .container {
    padding-left: 12px;
    padding-right: 12px;
    margin-left: auto;
    margin-right: auto;
    @media screen and (min-width:320px) {
        max-width: 428px;
}
    @media screen and (min-width:768px) {
        max-width: 768px;
}

    @media screen and (min-width:1152px) {
        max-width: 1152px;
    
}


}`;
