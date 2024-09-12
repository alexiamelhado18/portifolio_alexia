"use client";

//estilização
import "./style.css";

import Link from "next/link";

//hooks
import { useEffect, useLayoutEffect, useState } from "react";

//componentes
import { MenuResponsivoModal } from "../MenuResponsivoModal";

export function Banner() {

    const [abrirModalMenuResponsivo, setAbrirModalMenuResponsivo] = useState<boolean>(false);

    function abrirMenuResponsivo() {
        setAbrirModalMenuResponsivo(true);
    }

    function fecharMenuResponsivo() {
        setAbrirModalMenuResponsivo(false);
    }

    return (
        <>
            <div className="div__banner">
                <header>
                    <img src="/assets/images/svg/Logo.svg" alt="Logo que representa um tag html, formada pela letra A, / e V, deitados na horizontal." />

                    <button type="button" onClick={abrirMenuResponsivo}>
                        <img src="/assets/images/png/abrir.png" alt="ícone que representa um menu" id="img__abrir" />
                    </button>
                </header>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <div className="div__seta"></div>
                                <Link href={"#"}>inicial</Link>
                            </li>
                            <li>
                                <Link href={"#"}>sobre mim</Link>
                            </li>
                            <li>
                                <Link href={"#"}>experiência</Link>
                            </li>
                            <li>
                                <Link href={"#"}>projetos</Link>
                            </li>
                            <li>
                                <Link href={"#"}>contato</Link>
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
                abrirModalMenuResponsivo && (
                    <MenuResponsivoModal
                        fecharMenuResponsivo={fecharMenuResponsivo}
                    />
                )
            }
        </>

    );
}