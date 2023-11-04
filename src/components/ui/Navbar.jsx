import React from "react";
import Image from "next/image";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

const NavbarUi = () => {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
          alt="Icono de la app de pokémon"
          width={70}
          height={70}
        />
        <h1><span className="text-xl font-bold">P</span>okémon</h1>
      </NavbarBrand>
      <NavbarContent className="sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Favoritos
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default NavbarUi;
