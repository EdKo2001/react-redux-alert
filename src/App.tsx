import { Button } from "antd";

import { useDispatch } from "react-redux";

import { showModal } from "./features/alert/alertSlice";

const App = () => {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Button
        size="large"
        onClick={() =>
          dispatch(
            showModal({ message: "It's a success alert", type: "success" })
          )
        }
        style={{
          background: "#f6ffed",
          border: "1px solid #b7eb8f",
          color: "black",
        }}
      >
        Show Success Alert
      </Button>
      <Button
        size="large"
        type="primary"
        onClick={() =>
          dispatch(showModal({ message: "It's an error alert", type: "error" }))
        }
        danger
      >
        Show Error Alert
      </Button>
      <Button
        size="large"
        type="primary"
        onClick={() =>
          dispatch(showModal({ message: "It's an info alert", type: "info" }))
        }
      >
        Show Info Alert
      </Button>
      <Button
        size="large"
        onClick={() =>
          dispatch(
            showModal({
              message: "It's a warning alert",
              type: "warning",
            })
          )
        }
        style={{
          background: "#fffbe6",
          border: "1px solid #ffe58f",
          color: "black",
        }}
      >
        Show Warning Alert
      </Button>
    </div>
  );
};

export default App;
