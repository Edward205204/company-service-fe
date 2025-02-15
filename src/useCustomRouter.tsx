import { useRoutes } from 'react-router';
import Dashboard from './pages/Dashboard';
import MainLayout from './layout/MainLayout';
import Sidebar from './components/Sidebar';
import TotalIncome from './pages/TotalIncome';
import DayOff from './pages/DayOff';
import AverageBenefits from './pages/AverageBenefits';
import Notify from './pages/Notify';

export default function useCustomRouter() {
  const elements = useRoutes([
    {
      path: '/',
      index: true,
      element: (
        <MainLayout sidebar={<Sidebar />}>
          <Dashboard />
        </MainLayout>
      )
    },
    {
      path: '/tong-thu',
      element: (
        <MainLayout sidebar={<Sidebar />}>
          <TotalIncome />
        </MainLayout>
      )
    },
    {
      path: '/phep',
      element: (
        <MainLayout sidebar={<Sidebar />}>
          <DayOff />
        </MainLayout>
      )
    },
    {
      path: '/phuc-loi',
      element: (
        <MainLayout sidebar={<Sidebar />}>
          <AverageBenefits />
        </MainLayout>
      )
    },
    {
      path: '/thong-bao',
      element: (
        <MainLayout sidebar={<Sidebar />}>
          <Notify />
        </MainLayout>
      )
    }
  ]);
  return elements;
}
