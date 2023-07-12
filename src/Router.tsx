import { Route, Routes } from 'react-router-dom';
import Layout from '@layout/index';

// Pages
import CalendarPage from '@pages/CalendarPage';
import StampCheck from '@pages/StampValidPage';
import StampList from '@pages/StampListPage';
import MainPage from '@pages/MainPage';
import FestivalListPage from '@pages/FestivalListPage';
import AreaFilterPage from '@pages/AreaFilterPage';
import DetailPage from '@pages/DetailPage';
import SignUpPage from '@pages/SignUpPage';
import SignInPage from '@pages/SignInPage';
import WellcomePage from '@pages/WellcomePage';

const Router = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/festival" element={<FestivalListPage />} />
        <Route path="/festival/area" element={<AreaFilterPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/stamp/valid" element={<StampCheck />} />
        <Route path="/stamp/list" element={<StampList />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/wellcome" element={<WellcomePage />} />
      </Routes>
    </Layout>
  );
};

export default Router;
