import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppStructure from "./AppStructure";
import { pageList } from "./pages";
import AppContext from "./context/AppContext";

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
                                element={page.element}
                            />
                        ))}
                    </Routes>
                </AppStructure>
            </BrowserRouter>
        </AppContext>
    );
};

export default App;
