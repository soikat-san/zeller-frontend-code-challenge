import { ApolloClient, InMemoryCache } from "@apollo/client";
import { HttpLink } from "@apollo/client/link/http";
import awsconfig from "./aws-config";

const httpLink = new HttpLink({
  uri: awsconfig.aws_appsync_graphqlEndpoint,
  headers: {
    "x-api-key": import.meta.env.VITE_APP_SYNC_API_KEY,
  },
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
