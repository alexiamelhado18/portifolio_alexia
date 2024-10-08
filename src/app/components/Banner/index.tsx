"use client";

//estilização
import "./style.css";


//hooks
import { useState } from "react";

//componentes
import { MenuResponsivoModal } from "../MenuResponsivoModal";
import Link from "next/link";
import Image from "next/image";

//imagens
import imgLogo from "../../../../public/assets/images/svg/Logo.svg";
import imgAbrir from "../../../../public/assets/images/svg/abrir.svg";

export function Banner() {

    const [openModalMenuResponsivo, setOpenModalMenuResponsivo] = useState<boolean>(false);

    function openMenuResponsivo() {
        let elementBody = document.getElementsByTagName("body")[0];
        elementBody.style.overflow = "hidden";
        setOpenModalMenuResponsivo(true);
    }

    function closeMenuResponsivo() {
        let elementBody = document.getElementsByTagName("body")[0];
        elementBody.style.overflow = "auto";
        setOpenModalMenuResponsivo(false);
    }

    return (
        <>
            <div id="div__banner">
                <header>
                    <Image
                        src={imgLogo}
                        alt="Logo que representa um tag html, formada pela letra A, / e V, deitados na horizontal."
                    />

                    <button type="button" onClick={openMenuResponsivo} style={{cursor: "pointer"}}>
                        <Image
                            src={imgAbrir}
                            alt="ícone que representa um menu" id="img__abrir"
                        />
                    </button>
                </header>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <div className="div__seta"></div>
                                <Link href="#div__banner">inicial</Link>
                            </li>
                            <li>
                                <Link href="#section__sobremim">sobre mim</Link>
                            </li>
                            <li>
                                <Link href="#section__experiencia">experiência</Link>
                            </li>
                            <li>
                                <Link href="#section__projetos">projetos</Link>
                            </li>
                            <li>
                                <Link href="#section__contato">contato</Link>
                            </li>
                        </ul>
                    </nav>
                    <div>
                        <p>
                            Seja bem-vindo(a) ao meu <span>portfólio</span>
                        </p>
                    </div>
                </div>
            </div >

            {
                openModalMenuResponsivo && (
                    <MenuResponsivoModal
                    closeMenuResponsivo={closeMenuResponsivo}
                    />
                )
            }
        </>

    );
}
