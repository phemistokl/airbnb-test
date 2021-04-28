import * as React from "react";
import { graphql, ChildMutateProps } from "react-apollo";
import gql from "graphql-tag";
import {
  ForgotPasswordChangeMutation,
  ForgotPasswordChangeMutationVariables,
} from "../../schemaTypes";
import { normalizeErrors } from "../../utils/normalizeErrors";
import { NormalizedErrorMap } from "../../types/NormalizedErrorMap";

interface Props {
  children: (data: {
    submit: (values: ForgotPasswordChangeMutationVariables) => Promise<NormalizedErrorMap | null>;
  }) => JSX.Element | null;
}

const C = ({
  children,
  mutate,
}: ChildMutateProps<
  Props,
  ForgotPasswordChangeMutation,
  ForgotPasswordChangeMutationVariables
>) => {
  const submit = React.useCallback(
    async (values: ForgotPasswordChangeMutationVariables) => {
      console.log(values);
      const { data: { forgotPasswordChange }}:any = await mutate({
        variables: values,
      });

      console.log(forgotPasswordChange);

      if (forgotPasswordChange) {
        return normalizeErrors(forgotPasswordChange)
      }
      

      return null;
    },
    []
  );

  return children({ submit: submit });
};

const forgotPasswordChangeMutation = gql`
  mutation ForgotPasswordChangeMutation($newPassword: String!, $key: String!) {
    forgotPasswordChange(newPassword: $newPassword, key: $key) {
      path
      message
    }
  }
`;

export const ChangePasswordController = graphql<
  Props,
  ForgotPasswordChangeMutation,
  ForgotPasswordChangeMutationVariables
>(forgotPasswordChangeMutation)(C);
