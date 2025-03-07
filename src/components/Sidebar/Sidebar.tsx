import { NavLink } from 'react-router';

export default function Sidebar() {
  return (
    <div className='h-screen w-64 bg-white drop-shadow-[4px_0px_10px_rgb(0 0 0 / 0.1))] shadow-sm py-6'>
      <div className='mb-16 text-2xl font-[500] text-black text-center'>HR & PAYROLL MANAGEMENT</div>
      <div className='flex flex-col'>
        <NavLink
          to={'/'}
          className={({ isActive }) =>
            `${isActive ? 'bg-blue-500 text-white ' : 'hover:bg-blue-500 hover:text-white'} hoverEffect text-center mb-4 p-4`
          }
        >
          DashBoard
        </NavLink>
        <NavLink
          to={'/payroll'}
          className={({ isActive }) =>
            `${isActive ? 'bg-blue-500 text-white ' : 'hover:bg-blue-500 hover:text-white'} hoverEffect text-center mb-4 p-4`
          }
        >
          Tổng thu nhập
        </NavLink>
        <NavLink
          to={'/phep'}
          className={({ isActive }) =>
            `${isActive ? 'bg-blue-500 text-white ' : 'hover:bg-blue-500 hover:text-white'} hoverEffect text-center mb-4 p-4`
          }
        >
          Ngày nghỉ phép
        </NavLink>
        <NavLink
          to={'/phuc-loi'}
          className={({ isActive }) =>
            `${isActive ? 'bg-blue-500 text-white ' : 'hover:bg-blue-500 hover:text-white'} hoverEffect text-center mb-4 p-4`
          }
        >
          Mức phúc lợi trung bình
        </NavLink>
        <NavLink
          to={'/thong-bao'}
          className={({ isActive }) =>
            `${isActive ? 'bg-blue-500 text-white ' : 'hover:bg-blue-500 hover:text-white'} hoverEffect text-center mb-4 p-4`
          }
        >
          Thông báo
        </NavLink>
      </div>
    </div>
  );
}
