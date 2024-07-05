import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Introduction from './pages/Introduction';
// import BlockchainBasics from './pages/BlockchainBasics';
// import Bitcoin from './pages/Bitcoin';
// Import other pages here

const App = () => (
  <Router>
    <Header />
    <Box display="flex">
      <Box width="250px" bgcolor="background.paper">
        <Sidebar />
      </Box>
      <Box flexGrow={1}>
        <MainContent />
        <Routes>
          <Route path="/introduction" element={<Introduction />} />
          {/* <Route path="/basics" element={<BlockchainBasics />} />
          <Route path="/bitcoin" element={<Bitcoin />} /> */}
          {/* Add routes for other sections here */}
        </Routes>
      </Box>
    </Box>
  </Router>
);

export default App;
