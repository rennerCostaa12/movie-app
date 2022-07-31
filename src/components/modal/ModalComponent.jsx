import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import { useState } from "react";
import YouTube from "react-youtube";
import { ContentModal } from "../../styles/ModalComponent";

export default function ModalComponent({ icon, idVideo }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
            <Button style={styleBtn} onClick={handleOpen}> {icon} <span>Assistir Trailer</span> </Button>
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
                    <ContentModal>
                        <h1 style={{ marginTop: 0 }}>Trailer</h1>
                        <YouTube videoId={idVideo} opts={configVideo} onReady={onReady} />
                    </ContentModal>
                </Fade>
            </Modal>
        </div>
    )
}