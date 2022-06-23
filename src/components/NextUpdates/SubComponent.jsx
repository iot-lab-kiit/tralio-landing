import { Typography } from '@mui/material';

function SubComponent(props) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img
                    style={{
                        width: '100px',
                        height: '100px',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                    src={props.updateImage}
                    alt='Feature'
                />
            </div>
            <Typography
                sx={{
                    fontSize: '30px',
                    fontWeight: 'bold',
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    paddingTop: '30px',
                    
                }}
            >
                {props.updateTitle}
            </Typography>
            <Typography style={{ fontSize: '20px', color: 'white', textAlign: 'center', paddingLeft: '10px', paddingTop: '20px', paddingBottom: '40px' }}>
                {props.updateDescription}
            </Typography>
        </div>
    );
}

export default SubComponent;
