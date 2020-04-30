import React from 'react';
import "./App.scss";
import Navbar from './components/Navbar/Navbar';
import TourList from './components/TourList/index';

class App extends React.Component {
    render()
    {
        return (
            <main>
             <Navbar />
             <TourList />
             </main>
        );
    }
}

export default App;
