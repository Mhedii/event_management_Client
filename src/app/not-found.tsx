import Image from "next/image";
import notfound from "../assets/404.png";
const NotFoundPage = () => {
  return (
    <div>
      <Image alt="Not Found" src={notfound} fill />
    </div>
  );
};

export default NotFoundPage;
