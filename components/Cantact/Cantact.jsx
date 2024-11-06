import Cantact_One from "./Cantact_One";
import Cantact_Two from "./Cantact_Two";

export default function Cantact() {
  return (
    <div 
      id="contact" 
      className="px-8 sm:px-20 md:px-24 mt-0" 
      style={{ 
        backgroundImage: 'url("/4872987.jpg")', // Remplacez par le chemin de votre image
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}
    >
      <h1 className="mb-0 mt-5 font-bold text-5xl text-center">N&apos;hésitez pas à nous contacter</h1>
      <div className="flex gap-4 mb-3 flex-col lg:flex-row">
        <Cantact_One />
        <Cantact_Two />
      </div>
    </div>
  );
}
