import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";

const QUOTES = gql`
  {
    quotes {
      id
      Author
    }
  }
`;

const QuoteList: any = () => {
  const { loading, error, data } = useQuery(QUOTES);
  if (error) return "Error loading quotes";
  if (loading) return "Loading ...";

  const { quotes } = data;

  return <ul>{
    quotes.map(({ Author, id }) => {
      return <li key={id} >{Author}</li>;
    })
  }
  </ul>
};

export default QuoteList;
