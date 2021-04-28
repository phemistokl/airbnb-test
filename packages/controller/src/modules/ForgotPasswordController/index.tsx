import * as React from "react";
import { graphql, ChildMutateProps } from "react-apollo";
import gql from "graphql-tag";
import {
  SendForgotPasswordEmailMutation,
  SendForgotPasswordEmailMutationVariables,
} from "../../schemaTypes";

interface Props {
  children: (data: {
    submit: (
      values: SendForgotPasswordEmailMutationVariables
    ) => Promise<null>;
  }) => JSX.Element | null;
}

const C = ({
  children,
  mutate,
}: ChildMutateProps<Props, SendForgotPasswordEmailMutation, SendForgotPasswordEmailMutationVariables>) => {
  const submit = React.useCallback(
    async (values: SendForgotPasswordEmailMutationVariables) => {
      console.log(values);
      const response = await mutate({
        variables: values,
      });
      console.log("response", response);

      return null;
    },
    []
  );

  return children({ submit: submit });
};

const forgotPasswordMutation = gql`
  mutation SendForgotPasswordEmailMutation($email: String!) {
    sendForgotPasswordEmail(email: $email)
  }
`;

export const ForgotPasswordController = graphql<
  Props,
  SendForgotPasswordEmailMutation,
  SendForgotPasswordEmailMutationVariables
>(forgotPasswordMutation)(C);
