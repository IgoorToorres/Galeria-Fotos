import cn from "classnames";

interface MainContentProps extends React.ComponentProps<"main"> { }


export default function MainContent({
    className,
    children,
    ...props
}: MainContentProps) {
    return <main
        className={cn("mt-20 pb-20", className)}
        {...props}
    >
        {children}
    </main>
}