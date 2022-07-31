import Pagination from "@mui/material/Pagination"
import { ContentPagination } from "../../styles/Pagination";
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function PaginationItems({ setPages, totalPages }) {

    const theme = createTheme({
        palette: {
            primary: {
                main: '#DC143C',
            },
        },
    });

    function handlePageChange(page) {
        setPages(page);
    }

    return (
        <ThemeProvider theme={theme}>
            <ContentPagination>
                <Pagination
                    hideNextButton={true}
                    hidePrevButton={true}
                    shape="rounded"
                    color="primary"
                    count={totalPages}
                    onChange={(e) => handlePageChange(e.target.textContent)} />
            </ContentPagination>
        </ThemeProvider>
    )
}