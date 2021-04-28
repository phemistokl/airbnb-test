import * as React from "react";
import { ForgotPasswordController } from "@abb/controller";

import { ForgotPasswordView } from "./ui/ForgotPasswordView";

export const ForgotPasswordConnector = () => {
  return (
    <ForgotPasswordController>
      {({ submit }: any) =>  <ForgotPasswordView submit={submit} />}
    </ForgotPasswordController>
  );
};
