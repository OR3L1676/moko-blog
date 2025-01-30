import image from "../assets/about-src/networking-media-sharing-icons-graphic-concept.jpg";

const About = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen overflow-hidden fixed top-0 left-0 w-full">
      <div className="bg-gray-900 flex flex-col items-center justify-center p-8">
        <h1 className="text-white text-5xl font-bold mb-5">About Us ℹ️</h1>
        <p className="text-white text-lg max-w-xl font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error officia
          temporibus possimus. Rerum laborum officia cupiditate corrupti minus
          quisquam dolor repellat reprehenderit officiis? Optio totam ut
          adipisci doloribus culpa veniam, repudiandae officia dolorem fugit
          doloremque in neque autem fuga labore.
        </p>
      </div>

      <div className="relative">
        <img
          src={image}
          alt="moko blog image of about page"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default About;
