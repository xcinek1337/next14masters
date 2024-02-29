/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query CategoriesGetList {\n  categories {\n    data {\n      ...CategoriesListItem\n    }\n    meta {\n      total\n      count\n    }\n  }\n}": types.CategoriesGetListDocument,
    "fragment CategoriesListItem on Category {\n  id\n  name\n  description\n  slug\n}": types.CategoriesListItemFragmentDoc,
    "query CategoryGetItem($slug: String!) {\n  category(slug: $slug) {\n    ...CategoriesListItem\n    products {\n      ...ProductsListItem\n    }\n  }\n}": types.CategoryGetItemDocument,
    "query CollectionGetItem($slug: String!) {\n  collection(slug: $slug) {\n    ...CollectionListItem\n    products {\n      ...ProductsListItem\n    }\n  }\n}": types.CollectionGetItemDocument,
    "fragment CollectionListItem on Collection {\n  description\n  id\n  name\n  slug\n}": types.CollectionListItemFragmentDoc,
    "query CollectionsGetList {\n  collections(take: 4) {\n    data {\n      ...CollectionListItem\n    }\n  }\n}": types.CollectionsGetListDocument,
    "query ProductGetItemById($id: ID!) {\n  product(id: $id) {\n    ...ProductsListItem\n  }\n}": types.ProductGetItemByIdDocument,
    "query ProductsGetList($take: Int!, $skip: Int!, $search: String) {\n  products(take: $take, skip: $skip, search: $search) {\n    data {\n      ...ProductsListItem\n    }\n    ...ProductsListCount\n  }\n}": types.ProductsGetListDocument,
    "query ProductsGetListBySearch($search: String!) {\n  products(search: $search) {\n    data {\n      ...ProductsListItem\n    }\n    ...ProductsListCount\n  }\n}": types.ProductsGetListBySearchDocument,
    "fragment ProductsListCount on ProductList {\n  meta {\n    total\n    count\n  }\n}": types.ProductsListCountFragmentDoc,
    "fragment ProductsListItem on Product {\n  id\n  name\n  price\n  description\n  rating\n  images {\n    url\n  }\n  categories {\n    name\n  }\n}": types.ProductsListItemFragmentDoc,
    "query SuggestedProductsGetLit {\n  products {\n    data {\n      ...ProductsListItem\n    }\n    ...ProductsListCount\n  }\n}": types.SuggestedProductsGetLitDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoriesGetList {\n  categories {\n    data {\n      ...CategoriesListItem\n    }\n    meta {\n      total\n      count\n    }\n  }\n}"): typeof import('./graphql').CategoriesGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CategoriesListItem on Category {\n  id\n  name\n  description\n  slug\n}"): typeof import('./graphql').CategoriesListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoryGetItem($slug: String!) {\n  category(slug: $slug) {\n    ...CategoriesListItem\n    products {\n      ...ProductsListItem\n    }\n  }\n}"): typeof import('./graphql').CategoryGetItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionGetItem($slug: String!) {\n  collection(slug: $slug) {\n    ...CollectionListItem\n    products {\n      ...ProductsListItem\n    }\n  }\n}"): typeof import('./graphql').CollectionGetItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CollectionListItem on Collection {\n  description\n  id\n  name\n  slug\n}"): typeof import('./graphql').CollectionListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetList {\n  collections(take: 4) {\n    data {\n      ...CollectionListItem\n    }\n  }\n}"): typeof import('./graphql').CollectionsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetItemById($id: ID!) {\n  product(id: $id) {\n    ...ProductsListItem\n  }\n}"): typeof import('./graphql').ProductGetItemByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($take: Int!, $skip: Int!, $search: String) {\n  products(take: $take, skip: $skip, search: $search) {\n    data {\n      ...ProductsListItem\n    }\n    ...ProductsListCount\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetListBySearch($search: String!) {\n  products(search: $search) {\n    data {\n      ...ProductsListItem\n    }\n    ...ProductsListCount\n  }\n}"): typeof import('./graphql').ProductsGetListBySearchDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductsListCount on ProductList {\n  meta {\n    total\n    count\n  }\n}"): typeof import('./graphql').ProductsListCountFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductsListItem on Product {\n  id\n  name\n  price\n  description\n  rating\n  images {\n    url\n  }\n  categories {\n    name\n  }\n}"): typeof import('./graphql').ProductsListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query SuggestedProductsGetLit {\n  products {\n    data {\n      ...ProductsListItem\n    }\n    ...ProductsListCount\n  }\n}"): typeof import('./graphql').SuggestedProductsGetLitDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
