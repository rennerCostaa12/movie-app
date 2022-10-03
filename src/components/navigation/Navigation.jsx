import { Link } from "react-router-dom"
import { Container, ContentNav } from "../../styles/Navigation"
import { Television, FilmStrip, Bookmark, Fire } from "phosphor-react"

export default function Navigation() {
    return (
        <Container>
            <ContentNav>
                <li>
                    <Link to="/" title="Em Altas">
                        <Fire size={32} />
                    </Link>
                </li>

                <li>
                    <Link to="movies" title="Filmes">
                        <FilmStrip size={32} />
                    </Link>
                </li>
                <li>
                    <Link to="tv" title="Séries/TV">
                        <Television size={32} />
                    </Link>
                </li>

                <li>
                    <Link to="favorites" title="Favoritos">
                        <Bookmark size={32} />
                    </Link>
                </li>
            </ContentNav>
        </Container>
    )
}