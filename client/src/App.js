import { CssBaseline, ThemeProvider } from "@mui/material";


function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      
    </div>
  );
}

export default App;
