import Image from "next/image"
import GridContainer from "../Grid"
import IconFile from '/public/icon-file.svg'
import IconHandOne from '/public/icon-hand.svg'
import IconHandTwo from '/public/icon-hand-02.svg'
import Mockup from '/public/mockup.svg'

const SectionHero = () => {
    return (
        <section className="relative w-full bg-hero bg-no-repeat bg-center bg-top bg-green-primary h-[834px] pt-16 overflow-hidden">
            <GridContainer className="flex flex-col items-center">
                <div className="w-full max-w-[1056px] text-center">
                    <h3 className="text-xl font-medium  text-teal-800 mb-4">Novo curso focado em instagram</h3>
                    <h1 className="text-white text-7xl/normal font-semibold mb-2">Destrave as suas habilidades</h1>
                    <div className="flex items-center justify-center gap-10">
                        <button className="flex items-center justify-center gap-2">
                            <Image
                                src={IconFile}
                                alt="icone de arquivo"
                            />
                            <span className="text-white font-medium">Assinar lista de espera</span>
                        </button>
                        <button className="py-4 px-5 bg-lime-400 rounded-full text-green-primary font-bold">
                            Começar agora
                        </button>
                    </div>
                </div>
                <div className="relative w-full max-w-[855px] mt-4 h-28">
                    <Image
                        src={IconHandOne}
                        alt="Icone de mão"
                        className="absolute bottom-0 left-0"
                    />
                    <Image
                        src={IconHandTwo}
                        alt="Icone de mão 02"
                        className="absolute top-0 right-0"
                    />
                </div>

                <div className="absolute top-96 w-full max-w-[957px] flex justify-between">
                    <Image
                        src={Mockup}
                        alt="Mockup tela de celular"
                        className="-rotate-12 relative top-5 left-14"
                    />
                    <Image
                        src={Mockup}
                        alt="Mockup tela de celular"
                        className="rotate-12 relative top-5 right-14"
                    />
                </div>
            </GridContainer>
        </section>
    )
}

export default SectionHero