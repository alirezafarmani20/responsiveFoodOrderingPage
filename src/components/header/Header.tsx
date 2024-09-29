import Container from "../container/Container";
//importing assets
import images from "../../assets/image/image";

export default function Header() {
  return (
    <>
      <Container>
        <div className="flex justify-between">
          <div className="flex justify-between">
            <img src={images.logo} alt="site logo" />
          </div>
        </div>
      </Container>
    </>
  );
}
