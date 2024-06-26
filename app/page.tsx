import Header from "@/app/components/Header";
import Image from "next/image";
import pawIcon from "@/public/button-paw.svg";
import heroImage from "@/public/hero-img.svg";
import petsHouseInfo from "@/public/home-info-pet-house.svg";
import questionMark from "@/public/home-question-mark.svg";
import petFace from "@/public/home-pet-face.svg";
import ItemList from "./components/ItemList";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* hero section*/}
        <section className="flex justify-center flex-col align-middle p-2">
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
        <section className="flex flex-col bg-pasy-brown-text p-2">
          <h2 className="font-rubik text-white  font-semibold text-[32px] text-center">
            Más información
          </h2>
          <div className="flex flex-col gap-2 p-4 bg-white rounded-2xl max-w-[500px min-w-[300px] mx-auto">
            <Image
              src={petsHouseInfo}
              alt="pets with a house"
              className="self-center"
            />
            <h3 className="font-fredoka text-pasy-brown-text text-2xl font-medium self-center">
              ¿Cómo puedo adoptar?
            </h3>
          </div>

          <div className="flex flex-row m-auto gap-2 max-w-[300px] space-x-1 mt-4">
            <div className="font-fredoka flex flex-col bg-white align-middle justify-center rounded-2xl p-4">
              <Image
                src={questionMark}
                alt="a question mark icon"
                className="self-center"
              />
              <p className="text-center self-center text-pasy-brown-text font-medium text-[16px]">
                Preguntas frecuentes
              </p>
            </div>
            <div className="font-fredoka flex flex-col bg-white align-middle justify-center rounded-2xl p-4">
              <Image
                src={petFace}
                alt="a pet face icon"
                className="self-center"
              />
              <p className="text-center self-center text-pasy-brown-text font-medium text-[16px]">
                ¿Cómo dar en adopción?
              </p>
            </div>
          </div>
          <div></div>
        </section>
        <section>
          <h2 className="font-fredoka text-3xl text-pasy-brown-text text-center mt-6 font-medium">
            Mascotas cerca de ti
          </h2>
          <ItemList />
        </section>
      </main>
      <Footer />
    </>
  );
}
