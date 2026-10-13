import { useState } from "react";

export default function ProductCard(props) {
  const [cartCount, setCartCount] = useState(0);

  const addToCartClick = () => {
    setCartCount(cartCount + 1);
  };

  const removeFromCartClick = () => {
    setCartCount(cartCount - 1);
  };

  return (
    <div className="flex flex-col p-6 rounded-2xl bg-card">
      <img className="w-full size-24 mb-6" src={props.imageUrl} />

      <div className="w-full text-start">
        <p className="text-start py-1 text-xs text-foreground-muted font-medium">
          В корзине: {cartCount}
        </p>

        <p className="text-xl text-foreground font-bold">{props.title}</p>

        <p className="text-base py-1 text-foreground">{props.price}</p>
      </div>

      <div className="flex flex-row gap-2">
        {cartCount > 0 && (
          <button
            className="w-full px-4 py-2 mt-4 rounded-md text-base cursor-pointer transition-colors ring-2 ring-inset ring-foreground text-foreground hover:bg-foreground hover:text-black"
            onClick={removeFromCartClick}
          >
            Удалить
          </button>
        )}

        <button
          className="w-full px-4 py-2 mt-4 rounded-md text-base cursor-pointer transition-colors bg-foreground text-black hover:bg-foreground/80"
          onClick={addToCartClick}
        >
          Добавить
        </button>
      </div>
    </div>
  );
}
