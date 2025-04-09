import { Authenticated, Refine } from '@refinedev/core';
import { RefineKbar, RefineKbarProvider } from '@refinedev/kbar';

import routerBindings, {
    CatchAllNavigate,
    DocumentTitleHandler,
    UnsavedChangesNotifier,
} from '@refinedev/react-router-v6';
import { dataProvider, liveProvider } from '@refinedev/powerbase';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import authProvider from './authProvider';
import { powerbaseClient } from './utility';
import Account from './components/account';
import Auth from './components/auth';

function App() {
    return (
        <BrowserRouter>
            <RefineKbarProvider>
                <Refine
                    dataProvider={dataProvider(powerbaseClient)}
                    liveProvider={liveProvider(powerbaseClient)}
                    authProvider={authProvider}
                    routerProvider={routerBindings}
                    options={{
                        syncWithLocation: true,
                        warnWhenUnsavedChanges: true,
                    }}
                >
                    <Routes>
                        <Route
                            element={
                                <Authenticated
                                    fallback={<CatchAllNavigate to="/login" />}
                                >
                                    <Outlet />
                                </Authenticated>
                            }
                        >
                            <Route index element={<Account />} />
                        </Route>
                        <Route
                            element={<Authenticated fallback={<Outlet />} />}
                        >
                            <Route path="/login" element={<Auth />} />
                        </Route>
                    </Routes>
                    <RefineKbar />
                    <UnsavedChangesNotifier />
                    <DocumentTitleHandler />
                </Refine>
            </RefineKbarProvider>
        </BrowserRouter>
    );
}

export default App;
