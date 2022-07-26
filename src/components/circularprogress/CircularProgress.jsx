import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function CircularProgressWithLabel({ value }) {

    const theme = createTheme({
        palette: {
            primary: {
                main: '#DC143C',
            },
        },
    });

    const VoteAverage = value && parseFloat(value.toFixed(1))
    const ProgressBarValue = String(VoteAverage).replace(".", "");

    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <ThemeProvider theme={theme}>
                <CircularProgress
                    size={60}
                    color='primary'
                    variant="determinate"
                    value={Number(ProgressBarValue.length < 2 ? ProgressBarValue * 10 : ProgressBarValue)} />
            </ThemeProvider>
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography variant="caption" component="div" color="text.secondary">
                    {VoteAverage}
                </Typography>
            </Box>
        </Box>
    );
}

export default function CircularStatic({ Notes }) {

    return <CircularProgressWithLabel value={Notes} />;
}
