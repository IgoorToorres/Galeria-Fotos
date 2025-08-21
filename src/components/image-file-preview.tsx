import { tv } from "tailwind-variants"

export const imageFilePreviewVariants = tv({
    base: "rounded-lg overflow-hidden"
})

export const ImageFilePreviewImageVariants = tv({
    base: "w-full h-full object-cover"
})

interface ImageFilePreviewProps extends React.ComponentProps<'img'> {
    imageClassName?: string;
}

export default function ImageFilePreview({ className, imageClassName, ...props }: ImageFilePreviewProps) {
    return (
        <div className={imageFilePreviewVariants({ className })}>
            <img {...props} className={ImageFilePreviewImageVariants({ className: imageClassName })} />
        </div>
    )
}