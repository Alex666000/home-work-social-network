import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {Profile} from './components/Profile/Profile';
import {ActionType, StateType} from './redux/state';

type AppPropsType = {
    state: StateType
    dispatch: (action: ActionType) => void
}

const App: React.FC<AppPropsType> = (props) => {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                {/*У нас отображается Dialogs или Profile*/}
                <div className={'app-wrapper-content'}>

                    <Route path={'/dialogs'}
                           render={() => <Dialogs
                               dialogsPage={props.state.dialogsPage}
                           />}
                    />
                    <Route
                        path={'/profile'}
                        render={() => <Profile
                            profilePage={props.state.profilePage}
                            dispatch={props.dispatch}
                        />}/>
                </div>
            </div>
        </BrowserRouter>)
}

export default App;