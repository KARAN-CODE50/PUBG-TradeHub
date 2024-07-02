import Buy from "./buy/page";
import Footer from "./(home)/Footer";
import Content from "./(home)/Landing";
import WhyUs from "./(home)/WhyUs";
import Works from "./(home)/Works";
import Sell from "./sell/page";
import ContactUs from "./(home)/ContactUs";

export default function Home() {
  return (
    <div className="bg-primary text-white">
      <Content />
      <WhyUs/>
      <Works/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}