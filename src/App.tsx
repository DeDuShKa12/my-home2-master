import React, {FC} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {MainPage} from "./pages/MainPage/MainPage";
import {QuestionnairePage} from "./pages/QuestionnairePage/QuestionnairePage";

const App: FC = () => {
    return (
    <Routes>
        <Route path={'/'} element={<MainLayout/>}>
            <Route index element={<Navigate to={'home'} />} />
            <Route path={'home'} element={<MainPage/>} />
            <Route path={'questionnaire'} element={<QuestionnairePage/>} />
        </Route>
    </Routes>
    )
}
export {App};
