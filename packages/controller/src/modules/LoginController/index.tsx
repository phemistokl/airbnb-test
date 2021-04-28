import * as React from "react";
import { graphql, ChildMutateProps } from "react-apollo";
import gql from "graphql-tag";
import { LoginMutation, LoginMutationVariables } from "../../schemaTypes";
import { normalizeErrors } from "../../utils/normalizeErrors";
import { NormalizedErrorMap } from "../../types/NormalizedErrorMap";

interface Props {
  children: (data: {
    submit: (values: LoginMutationVariables) => Promise<NormalizedErrorMap | null>;
  }) => JSX.Element | null;
}

const C = ({
  children,
  mutate,
}: ChildMutateProps<Props, LoginMutation, LoginMutationVariables>) => {
  const submit = React.useCallback(async (values: LoginMutationVariables) => {
    console.log(values);
    const {
      data: { login },
    }:any = await mutate({
      variables: values,
    });

    console.log("response", login);

    if (login) {
        return normalizeErrors(login);
    }

    return null;
  }, []);

  return children({ submit: submit });
};

const loginMutation = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      path
      message
    }
  }
`;

export const LoginController = graphql<
  Props,
  LoginMutation,
  LoginMutationVariables
>(loginMutation)(C);
