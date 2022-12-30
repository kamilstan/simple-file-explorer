import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';

import {MainView} from "./views/MainView/MainView";
import {DirectoryView} from "./views/DirectoryView/DirectoryView";

import {IdContext} from "./contexts/id.context";
import {ChildrenContext} from './contexts/children.context';
import {NameContext} from "./contexts/name.context";
import {PreviousChildrenContext} from "./contexts/previousChildren.context";
import {PreviousNameContext} from "./contexts/previousName.context";

export const App = () => {

    const [id, setId] = useState('');
    const [children, setChildren] = useState([]);
    const [previousChildren, setPreviousChildren] = useState([]);
    const [name, setName] = useState('');
    const [previousName, setPreviousName] = useState('');

    return (
        <IdContext.Provider value={{id, setId}}>
            <ChildrenContext.Provider value={{children, setChildren}}>
                <NameContext.Provider value={{name, setName}}>
                    <PreviousChildrenContext.Provider value={{previousChildren, setPreviousChildren}}>
                        <PreviousNameContext.Provider value={{previousName, setPreviousName}}>
                            <Routes>
                                <Route
                                    path="/"
                                    element={<MainView />}
                                />
                                <Route
                                    path="/:id/"
                                    element={<DirectoryView />}
                                />
                                <Route
                                    path="/:id/:id"
                                    element={<DirectoryView />}
                                />
                            </Routes>
                        </PreviousNameContext.Provider>
                    </PreviousChildrenContext.Provider>
                </NameContext.Provider>
            </ChildrenContext.Provider>
        </IdContext.Provider>
    )
}

