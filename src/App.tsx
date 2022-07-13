import React from 'react';
import Flex from './Styles/styledComponent/Flex';
import globalStyle from './Styles/globalCss';
import Nav from './components/nav';
import MainCon from './components/mainCon';
function App() {

  globalStyle()

  return (
    <Flex  id='wrapper' data-testid="app"  css={{
      backgroundColor:"$bg",
      padding:"0 $6",
      overflowY:"hidden",
      "@bp5":{
        overflowY:"scroll",
      },

      "@bp4":{
        padding:"0 $3",
      }
      }} >

      <Nav/>
      <MainCon/>
    </Flex>
  );
}

export default App;
