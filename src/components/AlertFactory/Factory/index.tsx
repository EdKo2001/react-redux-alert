import { useEffect } from "react";

import { Alert } from "antd";

import { useAppSelector } from "../../../app/hooks";

const AlertFactory = () => {
  const alert = useAppSelector((state) => state.alert);

  console.log(alert);

  useEffect(() => {
    document?.querySelector(".instant-alert")?.classList?.add("active");
    setTimeout(() => {
      document?.querySelector(".instant-alert")?.classList?.remove("active");
    }, 3000);
  }, [alert.show]);

  if (alert.message === "") {
    return null;
  }

  return (
    <Alert
      message={alert?.message}
      type={alert?.type}
      className="instant-alert"
      showIcon
    />
  );
};

export default AlertFactory;
