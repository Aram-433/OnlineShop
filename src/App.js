import style from "./App.module.css";
import AppRouter from "./Routes/AppRouter";

function App() {
  return (
    <div className={style.App}>
      <AppRouter />
    </div>
  );
}

export default App;
