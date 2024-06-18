import Buy from "./(buy)/buy";
import Footer from "./(home)/Footer";
import Content from "./(home)/Landing";
import WhyUs from "./(home)/WhyUs";
import Works from "./(home)/Works";

export default function Home() {
  return (
    <div className="bg-primary text-white">
      <Content />
      <WhyUs/>
      <Works/>
      <Buy />
      <Footer/>
    </div>
  );
}