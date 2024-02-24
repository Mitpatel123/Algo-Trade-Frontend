import React from 'react'
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { Box, DialogContent } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { makeStyles } from 'tss-react/mui';
import Label from './common/label';


const useStyles = makeStyles()((theme) => {
    return {
        dialog_Main: {
            '& .MuiDialog-paper.MuiPaper-rounded': {
                borderRadius: "10px",
                overflow: 'hidden',
                margin: "30px",
                width: "100%",
                maxWidth: '800px',
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.bgWhite.main,
                [theme.breakpoints.down('sm')]: { margin: "12px", }
            }
        }
    };
});

const CommonModal = ({ maxWidth, onClose, open, title, content, children, fontSize, sx, dialogSx }) => {
    const { classes } = useStyles();
    const handleDlgClose = (event, reason) => {
        console.log(reason, "reasonreason")
        if (reason && reason == "backdropClick") {
            return;
        }
    }
    return (
        <Dialog
            onClose={handleDlgClose}
            open={open}
            className={classes.dialog_Main}
        >
            <Box sx={{ padding: { md: "24px", sm: "18px", xs: "12px" }, marginTop: { sm: "12px", xs: "30px" }, ...sx }}>
                <Label textAlign="center" variant="h4" fontWeight="600" title={title} />
                <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    width={20}
                    height={20}
                    borderRadius={2}
                    sx={{ cursor: "pointer", position: "absolute", right: { sm: "24px", xs: "12px" }, top: { sm: "24px", xs: "12px" } }}
                    onClick={() => onClose()}
                >
                    X
                </Box>
            </Box>
            <DialogContent sx={{ padding: { md: "24px", sm: "18px", xs: "12px" }, ...dialogSx }}>
                {children}
            </DialogContent>
        </Dialog>
    )
}
export default CommonModal