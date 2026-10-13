import sampleImg from "../src/assets/react.svg";
import ProductCard from "./ProductCard";

function App() {
  return (
    <div className="flex flex-col pt-4 gap-8">
      <div className="grid grid-cols-3 gap-4">
        <ProductCard imageUrl={sampleImg} title="Товар 1" price="100р" />

        <ProductCard imageUrl={sampleImg} title="Товар 2" price="200р" />

        <ProductCard imageUrl={sampleImg} title="Товар 3" price="300р" />
      </div>
    </div>
  );
}

export default App;
