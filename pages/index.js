import React from "react";
import { Button } from "@nextui-org/react";
import Title from "../components/Title";
import LoginModal from "../components/LoginModal";

export default function Home() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
      setVisible(false);
      console.log("closed");
  };
  return (
      <div>
          <Title title="한움" />
          <Button auto color="warning" shadow onClick={handler}>
              Open modal
          </Button>
          <LoginModal visible={visible} closeHandler={closeHandler} />
      </div>
  );
}
