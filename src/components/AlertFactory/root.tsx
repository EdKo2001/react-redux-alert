import { FC } from "react";

import { Provider } from "react-redux";

import AlertFactory from "./Factory";

interface AlertRootProps {
  store: any;
}

const AlertRoot: FC<AlertRootProps> = ({ store }) => {
  if (!store) {
    throw Error("Redux store must be passed as an argument to AlertRoot.");
  }

  return (
    <Provider store={store}>
      <AlertFactory />
    </Provider>
  );
};

export default AlertRoot;
