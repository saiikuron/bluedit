import { Box, Flex, Link } from "@chakra-ui/layout";
import React from "react";
import NextLink from "next/link";
import { useMeQuery } from "../generated/graphql";
import { Button } from "@chakra-ui/button";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const [{ data, fetching }] = useMeQuery();
  let body = null;

  // data is loading
  if (fetching) {
    //user is not logged in
  } else if (!data?.me) {
    body = (
      <>
        <NextLink href="/login">
          <Link mr={2}>Login</Link>
        </NextLink>
        <NextLink href="/register">
          <Link>Register</Link>
        </NextLink>{" "}
      </>
    );
    // user is logged in
  } else {
    body = (
      <Flex>
        <Box mr={2}>{data.me.username}</Box>
        <Button color="black" variant="link">
          Logout
        </Button>
      </Flex>
    );
  }

  return (
    <Flex bg="grey" p={4}>
      <Box ml={"auto"}>{body}</Box>
    </Flex>
  );
};
