
import { Dialog, DialogContent, Stack, Typography } from '@mui/material';
import PreviewWrapper from "./PreviewWrapper"

interface SimpleDialogProps {  
    open: boolean;
    handleClose: () =>void; 
    content: any
  }



const DetailsPreviewTable: React.FC <SimpleDialogProps> = ({open, handleClose, content})=> {

    return(
        <Dialog open={open} onClose={handleClose} aria-labelledby="dialog-title"   maxWidth="md" fullWidth >
        <DialogContent>
        <Stack spacing={2} p={2} justifyContent="center" bgcolor="#d2f0f6cc" sx={{ borderRadius: 2 }}>
          <Stack spacing={2} p={3} bgcolor="grey.gb" sx={{ borderRadius: 2 }}>
            <Typography textAlign="right" variant="h6">
             More Info
            </Typography>

            <Stack spacing={2} direction="row" p={2} bgcolor="rgba(75, 217, 246, 0.8)" sx={{ borderRadius: 1.5 }}>
              <PreviewWrapper label={"firstName"} value={content?.firstName} />
              <PreviewWrapper label={"lastName "} value={content?.lastName}/>
              <PreviewWrapper label={"phone"} value={content?.phone} />
            </Stack>

            <Stack spacing={2} direction="row" p={2} bgcolor="rgba(75, 217, 246, 0.8)" sx={{ borderRadius: 1.5 }}>
              <PreviewWrapper label={"email"} value={content?.email} />
              <PreviewWrapper label={"street "} value={content?.street}/>
              <PreviewWrapper label={"suite"} value={content?.suite} />
            </Stack>

            <Stack spacing={2} direction="row" p={2} bgcolor="rgba(75, 217, 246, 0.8)" sx={{ borderRadius: 1.5 }}>
              <PreviewWrapper label={"zipcode"} value={content?.zipcode} />
              <PreviewWrapper label={"city"} value={content?.city}/>
              <PreviewWrapper label={"companyName"} value={content?.companyName} />
            </Stack>

            <Stack spacing={2} direction="row" p={2} bgcolor="rgba(75, 217, 246, 0.8)" sx={{ borderRadius: 1.5 }}>
              <PreviewWrapper label={"catchPhrase"} value={content?.catchPhrase} />
              <PreviewWrapper label={"bs "} value={content?.bs}/>
              <PreviewWrapper label={"companyName"} value={content?.companyName} />
            </Stack>
          </Stack>
        </Stack>
        </DialogContent>
      </Dialog>
    )
}

export default DetailsPreviewTable
