import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {Profile} from './components/Profile/Profile';
import {RootStateType, updateNewPostText} from './redux/state';

type AppPropsType = {
    state: RootStateType
    addPostCallback: (mess: string ) => void
    updateNewPostText: (text: string) => void
}

const App: React.FC<AppPropsType> = (props) => {
    return (
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
                        addPostCallback={props.addPostCallback}
                        updateNewPostText={props.updateNewPostText}
                    />}/>
            </div>
        </div>)
}

export default App;