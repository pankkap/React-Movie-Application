import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Movies from "./Movies";
import Card from "./Card";

function App() {
  return (
    <div className="container mt-4">
      <h3 className="bg-dark text-white p-2 text-center m-3">Movie Application</h3>
      <div className="row">
          {Movies.map((movie, i) => (
            <Card key={i} movie={movie} />
          ))}
        </div>
      </div>
  );
}

export default App;
