import Link from "next/link";
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
const QuoteList: any = (
  req) => {
  const { loading, error, data } = useQuery(QUOTES);

  if (error) {
    console.log(error);
    return "Error loading quotes";
  }

  if (loading) return "Loading ...";
  const { quotes } = data;


  return quotes.map(res => {
    return res.Author;
  });
};


export default QuoteList;
