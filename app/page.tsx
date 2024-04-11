import Header from "@/app/components/Header";
import Image from "next/image";
import pawIcon from "@/public/button-paw.svg";
import heroImage from "@/public/hero-img.svg";

export default function Home() {
  return (
    <>
      <Header />
      <main className="p-2">
        {/* hero section*/}
        <section className="flex justify-center flex-col align-middle">
          {/* TODO: Adjust the image for the white space */}
          <Image
            src={heroImage}
            alt="pets and house"
            className="place-self-center"
          />
          <h1 className="font-fredoka text-[32px] font-medium text-pasy-brown-text justify-center text-center mb-4">
            Adoptar es un acto de amor
          </h1>
          <button className=" justify-center font-rubik font-semibold text-xl bg-pasy-brown-text text-white px-4 py-2 rounded-xl mx-auto mb-2 flex flex-row gap-2 align-middle">
            <Image src={pawIcon} alt="search icon" />
            BUSCAR UNA MASCOTA
          </button>
          <p className="font-fredoka text-lg font-normal text-center text-pasy-brown-text">
            Un hogar una mascota
          </p>
        </section>
        {/* more info section*/}
        <section className="bg-pasy-brown-text">
          <h2 className="text-white font-rubik font-semibold text-[32px]">
            Más información
          </h2>
        </section>
      </main>
    </>
  );
}
