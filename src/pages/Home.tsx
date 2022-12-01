import { Button, Container, Card } from "react-bootstrap";
import storeItems from "../data/items.json";

export function Home() {
  return (
    <>
      <h1>Home Decor </h1>
      <Card className="h-100">
        <Card.Img
          variant="top"
          src={"./public/imgs/store.jpg"}
          height="375px"
          style={{ objectFit: "cover" }}
        />
      </Card>
    </>
  );
}
