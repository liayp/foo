import Right from "@/components/icons/Right";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero my-10 md:my-28">
      <div className="py-8 md:py-12">
        <h1 className="text-6xl font-extrabold font-agbalumo">
          Best Food<br />
          <p className="text-6xl">For Your Taste</p>
        </h1>
        <p className="my-6 text-sm font-medium font-konten2">
        Grocify offer a wide range of products, including fresh products, meats, dairy, baked goods and non-perishable items.
        </p>
        <div className="flex gap-4 text-sm">
          <button href="{'/menu'}" className="flex justify-center bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 uppercase items-center gap-2 text-white px-4 py-2 rounded-full">
            Order now
            <Right />
          </button>
          <button className="flex justify-center bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 uppercase items-center gap-2 text-white px-4 py-2 rounded-full">
            Book A Table
            <Right />
          </button>
        </div>
      </div>
      <div className="relative hidden md:block">
        <Image src={'/geprek.png'} layout={'fill'} objectFit={'contain'} alt={'pizza'} />
      </div>
    </section>
  );
}