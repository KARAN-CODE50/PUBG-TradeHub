import Buy from "./(buy)/buy";
import Content from "./(home)/Landing";
import WhyUs from "./(home)/whyUs";

export default function Home() {
  return (
    <div className="bg-primary text-white">
      <Content />
      <WhyUs/>
      <Buy />
    </div>
  );
}