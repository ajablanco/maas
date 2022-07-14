import React from "react";
import { useContractRead } from "wagmi";
import projectsABI from "../contracts/JBProjects.json";
import { useQuery } from "graphql-hooks";

const HOMEPAGE_QUERY = `query {
  projects(where: { owner: "0x7c88E445fA773275eAdc619D5a6FBe12a4f40a24" }) {
    projectId
  }
}`;

export default function Juicebox(props) {
  // const { data, isError, isLoading } = useContractRead({
  //   addressOrName: projectsABI.address,
  //   contractInterface: projectsABI,
  //   functionName: "getHunger",
  // });
  const { loading, error, data } = useQuery(HOMEPAGE_QUERY, {
    //  variables: {
    //    limit: 10,
    //  },
  });

  if (loading) return "Loading...";
  if (error) return "Something Bad Happened";

  return <div className="flex justify-between items-center">{JSON.stringify(data)}</div>;
}
