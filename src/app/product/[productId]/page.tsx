import { Suspense } from "react";
import { getProductById } from "@/api/products";
import { ProductListItem } from "@/ui/molecules/ProductListItem";
import { SugesstedProductsList } from "@/ui/organisms/SuggestedProducts";

export default async function SingleProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const product = await getProductById(params.productId);
  return (
    <>
      <ul>
        <ProductListItem product={product} />
      </ul>
      <aside>
        <Suspense>
          <SugesstedProductsList />
        </Suspense>
      </aside>
    </>
  );
}
