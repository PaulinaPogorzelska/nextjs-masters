import { ProductList } from "@/ui/organisms/ProductList";
import { type ProductItem } from "@/ui/types";

const products: ProductItem[] = [
  {
    id: "1",
    category: "category1",
    name: "title1",
    price: 100,
    coverImage: { src: "src1", alt: "alt1" },
  },
  {
    id: "2",
    category: "category2",
    name: "title2",
    price: 200,
    coverImage: { src: "src2", alt: "alt2" },
  },
  {
    id: "3",
    category: "category3",
    name: "title3",
    price: 300,
    coverImage: { src: "src3", alt: "alt3" },
  },
  {
    id: "4",
    category: "category4",
    name: "title4",
    price: 400,
    coverImage: { src: "src4", alt: "alt4" },
  },
  {
    id: "5",
    category: "category5",
    name: "title5",
    price: 500,
    coverImage: { src: "src5", alt: "alt5" },
  },
];

export default function Home() {
  return <ProductList products={products} />;
}
