type Props = {};
import {
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillInstagram,
  AiFillGithub,
  AiOutlineArrowUp,
} from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";

const iconsStyle = `h-12 w-12`;

const Footer = (props: Props) => {
  const backToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full p-4 mt-8  text-white bg-tertiary-100 relative  ">
      <div className="absolute -top-5 left-[50%] translate-x-[-50%] bg-tertiary-100 hover:scale-110 transition p-2 rounded-full ">
        {" "}
        <AiOutlineArrowUp
          onClick={() => backToTop()}
          className="text-white h-10 w-10 cursor-pointer "
        />{" "}
      </div>
      <div className="flex gap-4 w-full justify-center mt-6 ">
        <AiFillTwitterCircle className={iconsStyle} />
        <AiFillFacebook className={iconsStyle} />
        <AiFillInstagram className={iconsStyle} />
        <BsPinterest className={iconsStyle} />
      </div>
      <p className="text-center my-4">
        <a
          className="flex justify-center items-center"
          target="_blank"
          href="https://github.com/RaphGenius"
        >
          Site realisé par Raphaël Guet
          <AiFillGithub className=" ml-2 inline-block h-10 w-10" />
        </a>{" "}
      </p>
    </footer>
  );
};

export default Footer;
