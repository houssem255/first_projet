import Couv from "../../components/home/Couv";

export default function Home() {
  return (
    <main 
      className="px-16 gap-10" 
      style={{
        backgroundImage: "url('/5821.jpg')", // Replace with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh", // Optional: Ensures the background covers the full viewport height
      }}
    >
      <Couv />
    </main>
  );
}
