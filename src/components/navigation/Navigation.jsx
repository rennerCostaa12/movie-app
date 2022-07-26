import { Link } from "react-router-dom"
import { Container } from "../../styles/Navigation"
import { Television, FilmStrip, Bookmark, Fire } from "phosphor-react"

export default function Navigation() {
    return (
        <Container>
            <li>
                <Link to="/">
                    <Fire size={32} />
                </Link>
            </li>

            <li>
                <Link to="movies">
                    <FilmStrip size={32} />
                </Link>
            </li>
            <li>
                <Link to="tv">
                    <Television size={32} />
                </Link>
            </li>

            <li>
                <Link to="favorites">
                    <Bookmark size={32} />
                </Link>
            </li>
        </Container>
    )
}