import Link from "next/link"

type Props = {
    message: string,
    colorBG: string,
    link?: string
    messageLink?: string
}

export const ModalWarning = ({ message, colorBG, link, messageLink }: Props) => {
    return (
        <div className={`fixed top-[10vh] left-1/2 transform -translate-x-1/2 ${colorBG} drop-shadow-md text-gray-600 p-2 text-xl rounded-md`}>

            <p>
                {message}
                {link && messageLink &&
                    <span>
                        <Link href={link}>{` - ${messageLink}`}</Link>
                    </span>
                }
            </p>


        </div>
    )
}
