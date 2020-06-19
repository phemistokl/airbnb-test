import * as React from 'react';
import { graphql, ChildMutateProps } from 'react-apollo';
import gql from 'graphql-tag';
import { RegisterMutation, RegisterMutationVariables } from './__generated__/RegisterMutation';


interface Props {
    children: (data: { submit: (values: RegisterMutationVariables) => Promise<null> }) => JSX.Element | null,
}

const C = ({ children, mutate }: ChildMutateProps<Props, RegisterMutation, RegisterMutationVariables>) => { 
    const submit = React.useCallback(async (values: RegisterMutationVariables) => {
        console.log(values);
        const response = await mutate({
            variables: values
        })
        console.log("response", response);
        return null;
    }, []);

    return children({ submit: submit })
};

const registerMutation = gql`
    mutation RegisterMutation($email: String!, $password: String!) {
        register(email: $email, password: $password) {
            path
            message
        }
    }
`;

export const RegisterController = graphql<Props, RegisterMutation, RegisterMutationVariables>(registerMutation)(C)