import React, { useContext } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import alertContext from '../../Context/alertContext';
export default function AllAlerts() {
    const { alert } = useContext(alertContext)
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div className='z-[1000] fixed top-[85px] w-[100%] h-[60px]' style={{display:alert?'block':'none'}}>
            {alert && <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity={alert.type}>
                    <AlertTitle>{capitalize(alert.type)}</AlertTitle>
                    This is an {alert.type} alert — <strong>{alert.message}</strong>
                </Alert>
            </Stack>
            }
        </div>
    );
}