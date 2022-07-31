import { SearchField, ContentSearchField } from '../../styles/Search';
import { MagnifyingGlass } from 'phosphor-react';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Search({ pathRequisition }) {
    let navigte = useNavigate();

    const theme = createTheme({
        palette: {
            primary: {
                main: '#DC143C'
            }
        }
    })

    const [query, setQuery] = useState('');

    function handleChangeValueSearch(event) {
        setQuery(event.target.value)
    }

    function handleOnSubmit(e) {
        e.preventDefault();
        navigte(`/${pathRequisition}/${query}`)
        setQuery('');
    }

    return (
        <ContentSearchField onSubmit={handleOnSubmit}>
            <SearchField
                placeholder="Search for movies or TV series"
                value={query}
                onChange={handleChangeValueSearch}
            />

            <ThemeProvider theme={theme}>
                <Button variant='contained' color='primary' size='small' type='submit'>
                    <MagnifyingGlass size={35} weight="bold" />
                </Button>
            </ThemeProvider>
        </ContentSearchField>
    )
}