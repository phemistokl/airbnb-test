import * as React from "react";
import { ChangePasswordController } from "@abb/controller";

import { ChangePasswordView } from "./ui/ChangePasswordView";

export const ChangePasswordConnector = () => {
  return (
    <ChangePasswordController>
      {({ submit }: any) =>  <ChangePasswordView submit={submit} />}
    </ChangePasswordController>
  );
};
