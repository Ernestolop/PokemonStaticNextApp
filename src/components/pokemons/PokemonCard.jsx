import { useRouter } from "next/router";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

const PokemonCard = ({ pokemon }) => {

    const router = useRouter();
    const { id, name, image } = pokemon;

    const handleClick = () => {
        router.push(`/pokemon/${id}`)
    }

    return (
        <Card onClick={handleClick} shadow="sm" id={id} isPressable>
            <CardBody className="overflow-visible p-0">
                <Image
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    alt={name}
                    className="w-full object-contain h-[140px]"
                    src={image}
                />
            </CardBody>
            <CardFooter className="text-small justify-between">
                <p className="font-bold capitalize">{name}</p>
                <p className="text-default-500">#{id}</p>
            </CardFooter>
        </Card>
    )
}

export default PokemonCard;