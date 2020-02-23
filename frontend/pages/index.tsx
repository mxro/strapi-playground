import QuoteList from './QuoteList';
import ApolloClient from 'apollo-boost';

import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
});

const Home = () => <>
  <h1>Hello world!</h1>
  <ApolloProvider client={client} ><QuoteList></QuoteList></ApolloProvider>
</>;


export default Home;