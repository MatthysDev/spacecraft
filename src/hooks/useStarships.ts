import { useQuery } from "react-query";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

async function fetchData() {
  const result = await fetch(`https://swapi.dev/api/starships/`);
  const json = await result.json();
  return json;
}

export function useStarships() {
  return useQuery(["starships"], fetchData);
}
