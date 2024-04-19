import { ProductsGetListDocument, type TypedDocumentString } from "@/gql/graphql";
import { type ProductItem } from "@/ui/types";

type ProductResponseItem = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: Rating;
	image: string;
	longDescription: string;
};
type Rating = {
	rate: number;
	count: number;
};

const exceuteGrapql = async <TResult, TVariables>(
	query: TypedDocumentString<TResult, TVariables>,
	variables: TVariables,
): Promise<TResult> => {
	if (!process.env.GRAPHQL_URL) {
		throw new Error("GRAPHQL_URL is not defined");
	}
	const res = await fetch(process.env.GRAPHQL_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query,
			variables,
		}),
	});

	type GraphQLResponse<T> =
		| {
				data?: undefined;
				errors: { message: string }[];
		  }
		| {
				data: T;
				errors?: undefined;
		  };

	const graphqlResponse = (await res.json()) as GraphQLResponse<TResult>;

	if (graphqlResponse.errors) {
		throw new TypeError(`GraphQLError`, { cause: graphqlResponse.errors });
	}

	return graphqlResponse.data;
};

export const getProductsList = async () => {
	const graphqlResponse = await exceuteGrapql(ProductsGetListDocument, {});
	return graphqlResponse.products.data.map((p) => ({
		id: p.id,
		category: "",
		name: p.name,
		price: p.price,
		coverImage: { src: p.images[0].url, alt: "" },
	}));
};

export const getProductById = async (id: ProductResponseItem["id"]) => {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);

	const productResponse = (await res.json()) as ProductResponseItem;

	return productResponseItemToProductItem(productResponse);
};

const productResponseItemToProductItem = (product: ProductResponseItem): ProductItem => {
	return {
		id: product.id,
		category: product.category,
		name: product.title,
		price: product.price,
		coverImage: { src: product.image, alt: product.title },
	};
};
