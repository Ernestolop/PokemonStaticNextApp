import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";

const NavbarUi = () => {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
          alt="Icono de la app de pokémon"
          width={70}
          height={70}
          priority
        />

        <Link href="/" passHref>
          <h1><span className="text-xl font-bold">P</span>okémon</h1>
        </Link>

      </NavbarBrand>
      <NavbarContent className="sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="/favorites" passHref>
            Favoritos
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar >
  );
}

export default NavbarUi;
