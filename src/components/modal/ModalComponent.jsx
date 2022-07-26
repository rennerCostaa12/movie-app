import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import { useState } from "react";
import YouTube from "react-youtube";

export default function ModalComponent({ icon, idVideo }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const styleDiv = {
        fontSize: '25px',
        textAlign: 'center',
        color: '#f1f1f1',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 690,
        bgcolor: '#161d2fec',
        border: 'none',
        borderRadius: "5px",
        boxShadow: 24,
        p: 4,
    }

    const styleBtn = {
        background: "#F7C008",
        color: "#000",
        fontWeight: "bold"
    }

    const configVideo = {
        width: "680",
        heigth: "390",
        playerVars: {
            autoplay: 1,
        }
    }

    function onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
    return (
        <div>

            <Button style={styleBtn} onClick={handleOpen}> {icon} Watch Trailer </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >

                <Fade in={open}>
                    <Box sx={styleDiv}>
                        <h1 style={{ marginTop: 0 }}>Trailer</h1>
                        <YouTube videoId={idVideo} opts={configVideo} onReady={onReady} />
                    </Box>
                </Fade>
            </Modal>
        </div>
    )
}