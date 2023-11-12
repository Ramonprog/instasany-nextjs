import Image from "next/image"
import Link from "next/link"

import LogoImage from '/public/logo.svg'
import SearchIcon from '/public/icon-search.svg'
import UserIcon from '/public/icon-user.svg'
import GridContainer from "../Grid"

const Header = () => {
    return (
        <header className="relative w-full h-24 bg-green-primary flex items-center border-b border-x-zinc-400 border-b-green-border">
            <GridContainer className="flex items-center justify-between">
                <Image
                    src={LogoImage}
                    alt="Logo"
                />

                <div className="flex items-center gap-20">
                    <nav className=" gap-2">
                        <Link href={'#'} className={`px-3 py-1  text-white bg-emerald-700 rounded-full`}>Início</Link>
                        <Link href={'#'} className={`px-3 py-1 text-white text-opacity-40 hover:text-opacity-100 transition-all `}>Benefícios</Link>
                        <Link href={'#'} className={`px-3 py-1 text-white text-opacity-40 hover:text-opacity-100 transition-all `}>Para quem é o curso?</Link>
                        <Link href={'#'} className={`px-3 py-1 text-white text-opacity-40 hover:text-opacity-100 transition-all `}>Preços promocionais</Link>
                        <Link href={'#'} className={`px-3 py-1 text-white text-opacity-40 hover:text-opacity-100 transition-all `}>Sobre nós</Link>
                    </nav>

                    <div className="flex items-center gap-6">
                        <button>
                            <Image
                                src={SearchIcon}
                                alt="Icone de pesquisa"
                            />
                        </button>
                        <button className="flex items-center gap-2">
                            <Image
                                src={UserIcon}
                                alt="Icone de usuário"
                            />
                            <span className="text-white font-medium">Fazer Login</span>
                        </button>
                    </div>
                </div>
            </GridContainer>
        </header>
    )
}

export default Header