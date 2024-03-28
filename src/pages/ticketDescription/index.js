import React, { useState } from "react";
import Label from "../../components/common/label";
import { Box, Button, Divider, Grid, Stack } from "@mui/material";
import PageContainer from "../../components/page-container";
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),

}));

const TicketDescription = () => {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [orderType, setOrderType] = useState("");
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <PageContainer>
            <Stack
                spacing={{ xs: 1, sm: 2 }}
                direction="row"
                useFlexGap
                flexWrap="wrap"
                justifyContent="space-between"
            >
                <Box display="flex" alignItems="center" gap="5px">
                    <Label
                        text="ID : #123456"
                        fontWeight={500}
                        fontSize={{ xs: "17px", sm: "22px", md: "26px" }}
                        color="white"
                    />
                </Box>
            </Stack>

            <Box
                width="calc(100vw - 110px)"
                overflow="auto"
                sx={{
                    backgroundColor: "#0B253D",
                    padding: "15px",
                    borderRadius: "10px",
                    marginY: "23px",
                }}
            >
                <Box display={"flex"} gap={2}>
                    <Stack direction="row" spacing={2}>
                        <Avatar alt="Remy Sharp" src="/avatar.png" sx={{ width: 60, height: 60 }} />
                    </Stack>
                    <Box>
                        <Typography fontSize={"24px"}>
                            Karin Roy
                        </Typography>
                        <Box display={"flex"} gap={3}>
                            <Typography fontSize={"16px"}>
                                karinroy12@gmail.com
                            </Typography>
                            <Typography fontSize={"16px"}>
                                Id : #123456
                            </Typography>
                            <Typography fontSize={"16px"}>
                                Feb 17, 2024
                            </Typography>
                        </Box>

                    </Box>
                </Box>
                <Divider
                    style={{
                        backgroundColor: "#163A5C",
                        marginTop: 12,
                        marginBottom: 12,
                    }}
                />
                <Box marginTop={"15px"}>
                    <Typography fontSize={"22px"}>
                        Issues Regarding Sign In
                    </Typography>
                    <Typography fontSize={"16px"} lineHeight={"24px"} marginTop={"20px"}>
                        Hello Team,<br /><br />
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                        unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with.
                        Thank You.
                    </Typography>
                </Box>
                {/* <Box marginTop={"20px"}>
                    <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                    >
                        Upload file
                        <VisuallyHiddenInput type="file" />
                    </Button>
                </Box> */}

                {/* Second Card */}
                <Divider
                    style={{
                        backgroundColor: "#163A5C",
                        marginTop: 12,
                        marginBottom: 12,
                    }}
                />
                <Box display={"flex"} gap={2}>
                    <Stack direction="row" spacing={2}>
                        <Avatar alt="Remy Sharp" src="/images.jpg" sx={{ width: 60, height: 60 }} />
                    </Stack>
                    <Box>
                        <Typography fontSize={"24px"}>
                            Admin
                        </Typography>
                        <Box display={"flex"} gap={3}>
                            <Typography fontSize={"16px"}>
                                Admin12@gmail.com
                            </Typography>
                            <Typography fontSize={"16px"}>
                                Id : #123456
                            </Typography>
                            <Typography fontSize={"16px"}>
                                Feb 17, 2024
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Divider
                    style={{
                        backgroundColor: "#163A5C",
                        marginTop: 12,
                        marginBottom: 12,
                    }}
                />
                <Box marginTop={"15px"}>
                    <Typography fontSize={"22px"}>
                        Sign In Issue Resolved
                    </Typography>
                    <Typography fontSize={"16px"} lineHeight={"24px"} marginTop={"20px"}>
                        Hello Karin,<br /><br />
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                        unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with.
                        Thank You.
                    </Typography>
                </Box>
            </Box>
        </PageContainer >
    );
};

export default TicketDescription;
