import { useRoutes } from 'react-router';
import Dashboard from './pages/Dashboard';
import MainLayout from './layout/MainLayout';
import Sidebar from './components/Sidebar';
import DayOff from './pages/DayOff';
import AverageBenefits from './pages/AverageBenefits';
import Notify from './pages/Notify';
import Payroll from './pages/Payroll';

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
      path: '/payroll',
      element: (
        <MainLayout sidebar={<Sidebar />}>
          <Payroll />
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
