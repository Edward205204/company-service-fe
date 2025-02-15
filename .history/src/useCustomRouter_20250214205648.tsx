import { useRoutes } from 'react-router';
import Dashboard from './pages/Dashboard';
import MainLayout from './layout/MainLayout';
import Sidebar from './components/Sidebar';

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
          <Dashboard />
        </MainLayout>
      )
    },
    {
      path: '/nghi-phep',
      element: (
        <MainLayout sidebar={<Sidebar />}>
          <Dashboard />
        </MainLayout>
      )
    },
    {
      path: '/phuc-loi',
      element: (
        <MainLayout sidebar={<Sidebar />}>
          <Dashboard />
        </MainLayout>
      )
    },
    {
      path: '/thong-bao',
      element: (
        <MainLayout sidebar={<Sidebar />}>
          <Dashboard />
        </MainLayout>
      )
    }
  ]);
  return elements;
}
