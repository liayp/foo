'use client';

import SectionHeaders from "@/components/layout/SectionHeaders";
import MenuItem from "@/components/menu/MenuItem";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function MenuPage() {
  const [categories, setCategories] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    fetch('/api/categories').then(res => {
      res.json().then(categories => setCategories(categories))
    });
    fetch('/api/menu-items').then(res => {
      res.json().then(menuItems => setMenuItems(menuItems));
    });
    fetch('/api/menu-items').then(res => {
      res.json().then(menuItems => {
        setBestSellers(menuItems.slice(-3));
      });
    });
  }, []);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <section className="mt-8">
      <div className="text-center mb-7">
        <SectionHeaders
          mainHeader={'Our Menus'} />
      </div>
      <div className="text-center mb-10 font-serif font-extralight px-4">
        {categories?.length > 0 && categories.map(c => (
          <span
            key={c._id}
            className={`mr-4 cursor-pointer ${selectedCategory === c._id ? 'font-bold border-b-2 border-yellow-600' : ''}`}
            onClick={() => handleCategoryClick(c._id)}
          >
            {c.name}
          </span>
        ))}
      </div>
      
      <div className="grid sm:grid-cols-3 gap-4 mt-6 mb-12">
        {(!selectedCategory ? bestSellers : menuItems.filter(item => item.category === selectedCategory))
          .map(item => (
            <MenuItem key={item._id} {...item} />
          ))}
      </div>
    </section>
  );
}






// 'use client';
// import SectionHeaders from "@/components/layout/SectionHeaders";
// import MenuItem from "@/components/menu/MenuItem";
// import Image from "next/image";
// import {useEffect, useState} from "react";

// export default function HomeMenu() {
//   const [bestSellers, setBestSellers] = useState([]);
//   useEffect(() => {
//     fetch('/api/menu-items').then(res => {
//       res.json().then(menuItems => {
//         setBestSellers(menuItems.slice(-3));
//       });
//     });
//   }, []);
//   return (
//     <section className="" id="menu">
//       <div className="absolute left-0 right-0 w-full justify-start">
//         <div className="absolute left-0 -top-[70px] text-left -z-10">
//           <Image src={'/sallad1.png'} width={109} height={189}  alt={'sallad'} />
//         </div>
//         <div className="absolute -top-[100px] right-0 -z-10">
//           <Image src={'/sallad2.png'} width={107} height={195} alt={'sallad'} />
//         </div>
//       </div>
      // <div className="text-center mb-14">
      //   <SectionHeaders
      //     mainHeader={'Our Menus'} />
      // </div>
//       <div className="grid sm:grid-cols-3 gap-4">
//         {bestSellers?.length > 0 && bestSellers.map(item => (
//           <MenuItem key={item._id} {...item} />
//         ))}
//       </div>
//     </section>
//   );
// }