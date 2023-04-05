import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppStructure from "./AppStructure";
import { pageList } from "./pages";

const App = () => {
    return (
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
    );
};

export default App;
