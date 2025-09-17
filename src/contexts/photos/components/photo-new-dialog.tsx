import { useForm } from "react-hook-form";
import Alert from "../../../components/alert";
import Button from "../../../components/button";
import { Dialog, DialogHeader, DialogBody, DialogFooter, DialogContent, DialogTrigger, DialogClose } from "../../../components/dialog";
import ImagePreview from "../../../components/image-preview";
import InputSingleFile from "../../../components/input-single-file";
import InputText from "../../../components/input-text";
import Skeleton from "../../../components/skeleton";
import Text from "../../../components/text";
import type { Album } from "../../albums/models/album";


interface PhotoNewDialogProps {
    trigger: React.ReactNode;
}

export default function PhotoNewDialog({ trigger }: PhotoNewDialogProps) {

    const form = useForm();

    //mock dados teste
    const isLoadingAlbum = false;
    const albums: Album[] = [
        { id: "1", title: "Album 1" },
        { id: "2", title: "Album 2" },
        { id: "3", title: "Album 3" }
    ]

    return (
        <Dialog>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent>
                <DialogHeader>Adicionar Foto</DialogHeader>
                <DialogBody className="flex flex-col gap-5">
                    <InputText
                        placeholder="Adicione um titulo"
                        maxLength={255}
                    />

                    <Alert>
                        Tamanho maximo: 50mb.
                        <br />
                        você pode selecionar arquivos em PNG, JPG ou JPEG
                    </Alert>

                    <InputSingleFile
                        form={form}
                        allowedExtensions={['png', 'jpg', 'jpeg']}
                        maxFileSizeInMb={50}
                        replaceBy={
                            <ImagePreview
                                className="w-full h-56"
                            />
                        }
                    />

                    <div className="space-y-3">
                        <Text variant="label-small">Selecionar albums</Text>
                        <div className="flex flex-wrap gap-3">
                            {!isLoadingAlbum && albums.length > 0 && albums.map((album) => (
                                <Button key={album.id} variant="ghost" size="sm" className="truncate">{album.title}</Button>
                            ))}
                            {isLoadingAlbum && Array.from({ length: 5 }).map((_, index) => (
                                <Skeleton key={`album-button-${index}`} className="h-7 w-20" />
                            ))}
                        </div>
                    </div>

                </DialogBody>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="secondary">Cancelar</Button>
                    </DialogClose>
                    <Button>Adicionar</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}