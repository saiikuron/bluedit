import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import { Layout } from "../components/Layout";
import { Button } from "@chakra-ui/react";
import { InputField } from "../components/InputField";
import { useCreatePostMutation, useMeQuery } from "../generated/graphql";
import { useRouter } from "next/router";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";
import {useIsAuth} from '../utils/useIsAuth'

export const CreatePost: React.FC<{}> = ({}) => {
  
  const [,createPost] = useCreatePostMutation();
  const router = useRouter();
  useIsAuth()

  return (
    <Layout variant="small">
      <Formik
        initialValues={{ title:'', text:''}}
        onSubmit={async (values) => {
          const {error} = await createPost({input:values})
          if(error?.message.includes("Not authenticated")){
            router.push('/login');
        } else {
            router.push('/')
        }}}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              textarea={false}
              name="title"
              placeholder='title'
              label="title"
            ></InputField>
            <InputField 
              textarea
              name="text"
              placeholder='text...'
              label="text"
            ></InputField>
            <Button
              mt={4}
              isLoading={isSubmitting}
              type="submit"
              colorScheme="teal"
            >
              Create post
            </Button>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};
export default withUrqlClient(createUrqlClient)(CreatePost);
