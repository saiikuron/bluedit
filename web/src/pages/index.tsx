import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";
import { usePostsQuery } from "../generated/graphql";
import { Stack, Box, Heading, Text, Flex, Button } from "@chakra-ui/react";
import { Layout } from '../components/Layout';
import { useState } from "react";

const Index = () => {
  const [variables, setVariables] = useState({ limit:10, cursor: null as null | string});
  const [{ data, fetching }] = usePostsQuery({ variables });

  if(!fetching && !data){
    return <div>No posts found.</div>
  }
  return (
    <>
    <Layout>
      <br />
      {!data && fetching ? (
        <div>Loading...</div>
      ) : (
        <Stack spacing={8}>
          {data!.posts.map((p) => (
          <Box key={p.id} p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">{p.title}</Heading>
          <Text mt={4}>{p.textSnippet}</Text>
          </Box>
          ))}          
        </Stack>
      )}
      {data ? (
        <Flex>
          <Button onClick={()=>{
            setVariables({
              limit: variables.limit,
              cursor: data.posts[data.posts.length - 1].createdAt,
            })
          }} isLoading={fetching} m="auto" my={6}>Load more</Button>
        </Flex>
      ) : null
    };
    </Layout>
    </>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
