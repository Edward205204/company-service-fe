interface childrenProps {
  children: React.ReactNode;
  sidebar?: React.ReactNode;
}
export default function MainLayout({ children, sidebar }: childrenProps) {
  return (
    <>
      <div className='flex'>
        <aside>{sidebar}</aside>
        <div>
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}
