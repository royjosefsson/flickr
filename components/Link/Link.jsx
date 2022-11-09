import RegularLink from "next/link"

const Link = ({ href, children, disabled }) => {
    if (disabled) {
        return children
    }
    return <RegularLink href={href}>{children}</RegularLink>
}

export default Link