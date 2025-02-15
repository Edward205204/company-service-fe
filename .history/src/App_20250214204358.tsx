import useCustomRouter from './useCustomRouter';

function App() {
  const element = useCustomRouter();
  console.log(element);
  return <>{element}</>;
}

export default App;
