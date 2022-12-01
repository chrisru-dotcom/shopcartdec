import { Button, Container, Card } from "react-bootstrap";

import storeItems from "../data/items.json";

export function Home() {
  return (
    <>
      <h1 className="d-flex align-items-center">Home Decor </h1>
      <div className="ms-2 text-muted d-flex align-items-center">
        <h6 className=" text-muted ">
          Welcome to Home Decor! Please visit our store for our currated
          selection.
        </h6>
      </div>
      <Card className="h-100">
        <Card.Img
          variant="top"
          src={"/imgs/store.jpg"}
          height="375px"
          style={{ objectFit: "cover" }}
        />
      </Card>
    </>
  );
}
