import "./styles/main.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { pageList } from "./pages";
import AppContext from "./context/AppContext";
import AppStructure from "./components/AppStructure";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
    return (
        <AppContext>
            <BrowserRouter>
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
            </BrowserRouter>
        </AppContext>
    );
};

export default App;
