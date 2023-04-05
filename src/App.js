import "./styles/main.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { pageList } from "./pages";
import AppStructure from "./components/AppStructure";
import ProtectedRoute from "./components/ProtectedRoute";
import AppContextProvider from "./context/AppContextProvider";

const App = () => {
    return (
        <BrowserRouter>
            <AppContextProvider>
                <AppStructure>
                    <Routes>
                        {pageList.map((page, key) => (
                            <Route
                                key={key}
                                path={page.path}
                                element={
                                    page.protected ? (
                                        <ProtectedRoute>
                                            {page.element}
                                        </ProtectedRoute>
                                    ) : (
                                        page.element
                                    )
                                }
                            />
                        ))}
                    </Routes>
                </AppStructure>
            </AppContextProvider>
        </BrowserRouter>
    );
};

export default App;
