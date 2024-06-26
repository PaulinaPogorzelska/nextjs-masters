import Link from "next/link";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { type ProductItem } from "@/ui/types";

export const ProductListItem = ({ product }: { product: ProductItem }) => {
  return (
    <li>
      <Link href={`/product/${product.id}`}>
        <article>
          <ProductCoverImage {...product.coverImage} />
          <ProductListItemDescription product={product} />
        </article>
      </Link>
    </li>
  );
};
