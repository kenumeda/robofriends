import React,{ Component } from 'react';
import CardList from './Cardlist';
import SearchBox from './Searchbox';
import { robots } from './robots';

const state = {
    robots:robots,
    searchfield:''
}

class App extends React.Component {
    render(){
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox />
                <CardList robots={robots} />
            </div>
        );
        }
    }

export default App;