import AddToCartButton from "@/components/menu/AddToCartButton";

export default function MenuItemTile({onAddToCart, ...item}) {
  const {image, description, name, basePrice,
    sizes, extraIngredientPrices,
  } = item;
  const hasSizesOrExtras = sizes?.length > 0 || extraIngredientPrices?.length > 0;
  return (
    <div className="bg-stone-200 mt-14 mb-10 p-5 rounded-2xl text-center
      group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
      <div className="text-center">
        <img src={image} className="max-h-auto max-h-36 block mx-auto -translate-y-1/2" alt="pizza"/>
      </div>
      <h4 className="font-medium font-agbalumo text-2xl -mt-14 text-yellow-600">{name}</h4>
      <p className="text-gray-600 text-sm line-clamp-3 my-5">
        {description}
      </p>
      <AddToCartButton
        image={image}
        hasSizesOrExtras={hasSizesOrExtras}
        onClick={onAddToCart}
        basePrice={basePrice}
      />
    </div>
  );
}