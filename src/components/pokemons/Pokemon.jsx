import { useState, useEffect } from "react";
import { Button, Card, CardBody, Image } from "@nextui-org/react";
import confetti from "canvas-confetti";
import { toggleFavorite, existInFavorites } from "@/utilities";

const Pokemon = ({ pokemon }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    useEffect(() => {
        setIsFavorite(existInFavorites(pokemon.id));
    }, [pokemon.id]);

    const { id, name, image, sprites } = pokemon;
    const { frontDefault, backDefault, frontShiny, backShiny } = sprites;

    const handleToggleFavorite = () => {
        toggleFavorite(id, name);
        setIsFavorite(!isFavorite);
        if (isFavorite) return;
        confetti({
            zIndex: 999,
            particleCount: 100,
            spread: 160,
            angle: -100,
            origin: {
                x: 1,
                y: 0
            }
        });
    }
    return (
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Card shadow="sm">
                <CardBody>
                    <div className="mx-auto">
                        <Image
                            shadow="sm"
                            radius="lg"
                            height="100%"
                            alt={name}
                            src={image}
                        />
                    </div>
                </CardBody>
            </Card>
            <Card shadow="sm">
                <div className="h-full flex justify-center items-center py-10 sm:py-0">
                    <CardBody className="p-0">
                        <article className="px-10">
                            <header className="flex flex-col sm:flex-row justify-between items-center gap-2">
                                <h1 className="text-2xl font-bold capitalize">{name}</h1>
                                <Button onClick={() => handleToggleFavorite(id)} radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg h-8">
                                    {isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
                                </Button>
                            </header>
                            <section className="pt-3">
                                <h2 className="capitalize text-xl">Sprites:</h2>
                                <div className="flex flex-row justify-between items-center">
                                    <Image
                                        src={frontDefault}
                                        alt={`Imagen frontal de ${name}`}
                                        width={150}
                                        height={150}
                                    />
                                    <Image
                                        src={backDefault}
                                        alt={`Imagen trasera de ${name}`}
                                        width={150}
                                        height={150}
                                    />
                                    <Image
                                        src={frontShiny}
                                        alt={`Imagen frontal shiny de ${name}`}
                                        width={150}
                                        height={150}
                                    />
                                    <Image
                                        src={backShiny}
                                        alt={`Imagen trasera shiny de ${name}`}
                                        width={150}
                                        height={150}
                                    />
                                </div>
                            </section>
                        </article>
                    </CardBody>
                </div>
            </Card>
        </div>
    )
}

export default Pokemon