import Image from "next/image";
import hero from "../../public/hero.png";
import Button from "@/components/button/Button";

export default function Home() {
  return (
    <div className="flex items-center gap-24  capitalize">
      <div className="flex-1 flex-col flex gap-10">
        <p className="md:text-[70px] text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-green-900 to-blue-300 ">
          Better Design for your digital products.
        </p>
        <p className="text-lg font-light">
          turning your idea into reality. we bring together the teams from the
          global tech indusrty.
        </p>
        <Button url="/" text="see our works" />
      </div>
      <div className="lg:flex flex-1 hidden ">
        <Image
          src={hero}
          alt="/"
          className="w-full h-[500px] object-contain image "
        />
      </div>
    </div>
  );
}
