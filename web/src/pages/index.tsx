import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";
import { usePostsQuery } from "../generated/graphql";
import { Stack, Box, Heading, Text, Flex, Button } from "@chakra-ui/react";
import { Layout } from '../components/Layout';

const Index = () => {
  const [{ data, fetching }] = usePostsQuery({
    variables: {
      limit: 10,
    },
  });

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
          <Button isLoading={fetching} m="auto" my={6}>Load more</Button>
        </Flex>
      ) : null
    };
    </Layout>
    </>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
