import { useParams } from "react-router";
import Text from "../components/text";

export default function PagePhotoDetails({ }) {

    const { id } = useParams();

    return (
        <>
            <Text variant="heading-medium">Pagina detalhes da Foto</Text>
            <hr />
            <Text variant="heading-medium">Detalhes da foto: {id}</Text>

        </>

    );
}