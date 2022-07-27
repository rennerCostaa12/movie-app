import { SearchField, ContentSearchField } from '../../styles/Search';
import { MagnifyingGlass } from 'phosphor-react';
import { useContext } from 'react';
import { ValueSearchContext } from '../../contexts/search';
import axios from 'axios';
import { base_url, key } from '../../config/configApi';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function Search({ typeSearch, listsData }) {

    const theme = createTheme({
        palette: {
            primary: {
                main: '#DC143C'
            }
        }
    })

    const {
        setValueSearch,
        valueSearch,
    } = useContext(ValueSearchContext);

    function handleChangeValueSearch(event) {
        setValueSearch(event.target.value)
    }

    function handleOnSubmit(e) {
        e.preventDefault();

        axios.get(`${base_url}search/${typeSearch}?api_key=${key}&language=en-US&page=1&include_adult=false&query=${valueSearch}`)
            .then(function (response) {
                if (response.data.total_results == 0) {
                    alert('Not Found!');
                }
                listsData(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })

        setValueSearch('');
    }

    return (
        <ContentSearchField onSubmit={handleOnSubmit}>
            <SearchField
                placeholder="Search for movies or TV series"
                value={valueSearch}
                onChange={handleChangeValueSearch} />

            <ThemeProvider theme={theme}>
                <Button variant='contained' color='primary' size='small' type='submit'>
                    <MagnifyingGlass size={35} weight="bold" />
                </Button>
            </ThemeProvider>
        </ContentSearchField>
    )
}