import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const Home = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["catFact"],
    queryFn: async () => {
      const response = await axios.get("https://meowfacts.herokuapp.com/");
      return response.data;
    },
    refetchOnWindowFocus: false, // optional
  });

  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <h2>Error fetching data</h2>;

  return (
    <div>
      <h1>This is Home Page</h1>
      <p>{data?.data[0]}</p>
      <button onClick={refetch}>Update Data</button>
    </div>
  );
};
