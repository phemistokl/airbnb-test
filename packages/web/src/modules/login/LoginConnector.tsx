import * as React from "react";
import { LoginController } from "@abb/controller";

import { LoginView } from "./ui/LoginView";

export const LoginConnector = () => {
  return (
    <LoginController>
      {({ submit }: any) =>  <LoginView submit={submit} />}
    </LoginController>
  );
};
