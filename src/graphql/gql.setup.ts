import { ApolloClient, InMemoryCache } from "@apollo/client";

export const graphqlClient = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_SERVER_URI,
    cache: new InMemoryCache()
})