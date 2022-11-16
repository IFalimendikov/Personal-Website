import SocialMediaIcons from "../components/SocialMediaIcons";

const today = new Date();
const year = today.getFullYear();

const Footer = () => {
  return (
    <footer className="h-64 bg-orange pt-10">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-yellow">
            Ivan Falimendikov
          </p>
          <p className="font-playfair text-md text-yellow">
            ©{year} Falimendikov
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
