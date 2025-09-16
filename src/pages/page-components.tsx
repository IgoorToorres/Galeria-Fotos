import Button from "../components/button";
import ButtonIcon from "../components/button-icon";
import ChevronLeftIcon from "../assets/icons/chevron-left.svg?react";
import ChevronRightIcon from "../assets/icons/chevron-right.svg?react";
import Badge from "../components/badge";
import Alert from "../components/alert";
import Divider from "../components/divider";
import InputText from "../components/input-text";
import SearchIcon from "../assets/icons/search.svg?react"
import InputCheckbox from "../components/input-checkbox";
import InputSingleFile from "../components/input-single-file";
import { useForm } from "react-hook-form";
import ImagePreview from "../components/image-preview";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import { DialogBody, DialogClose, DialogContent, DialogFooter, DialogHeader } from "../components/dialog";

export default function PageComponents() {
    const form = useForm();
    const file = form.watch("file");
    const fileSource = file?.[0] ? URL.createObjectURL(file[0]) : undefined;


    return (
        <div className="grid gap-7 p-6">
            <div className="flex gap-3">
                <Button>Button</Button>
                <Button variant="secondary">Button</Button>
                <Button disabled>Button</Button>
                <Button handling>Loading</Button>
                <Button icon={ChevronRightIcon}>Próxima Imagem</Button>
                <Button variant="ghost" size="sm">
                    Button
                </Button>
                <Button variant="primary" size="sm">
                    Button
                </Button>
            </div>

            <div className="flex gap-3">
                <ButtonIcon icon={ChevronLeftIcon} />
                <ButtonIcon icon={ChevronRightIcon} variant="secondary" />
            </div>

            <div className="flex gap-3">
                <Badge>Todos</Badge>
                <Badge>Natureza</Badge>
                <Badge>Viagem</Badge>
                <Badge loading>Viagem</Badge>
                <Badge loading>Viagem</Badge>
                <Badge loading>Viagem</Badge>
            </div>

            <div>
                <Alert>
                    Tamanho máximo: 50MB
                    <br />
                    Você pode selecionar arquivos em PNG, JPG, JPEG ou WEBP
                </Alert>
            </div>

            <div>
                <Divider />
            </div>

            <div>
                <InputText placeholder="Buscar Foto" icon={SearchIcon} />
            </div>

            <div>
                <InputCheckbox />
            </div>

            <div>
                <InputSingleFile
                    form={form}
                    {...form.register('file')}
                    allowedExtensions={['png', 'jpg', 'jpeg', 'webp']}
                    maxFileSizeInMb={50}
                    replaceBy={<ImagePreview src={fileSource} alt="imagem" />}
                />
            </div>
            <div>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button>Abrir Modal</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            Teste Dialog
                        </DialogHeader>
                        <DialogBody>
                            <InputSingleFile
                                form={form}
                                {...form.register('file')}
                                allowedExtensions={['png', 'jpg', 'jpeg', 'webp']}
                                maxFileSizeInMb={50}
                                replaceBy={<ImagePreview src={fileSource} alt="imagem" />}
                            />
                        </DialogBody>
                        <DialogFooter>
                            <DialogClose>
                                <Button variant="secondary">Cancelar</Button>
                            </DialogClose>
                            <Button >Enviar</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
}
