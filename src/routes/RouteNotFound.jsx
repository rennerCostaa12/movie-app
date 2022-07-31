import { ContentNotFound } from "../styles/RouteNotFound"
import Container from '@mui/material/Container';
import { Warning } from "phosphor-react";

export default function RouteNotFound() {

    return (
        <Container maxWidth="lg">
            <ContentNotFound>
                <h1>Rota Não Encontrada</h1>
                <Warning size={62} />
            </ContentNotFound>
        </Container>
    )
}