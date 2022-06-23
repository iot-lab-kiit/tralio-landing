import { Typography } from '@mui/material';

function Tralio(props) {
    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    paddingTop: '50px',
                }}
            >
                <img style={{ width: '200px', height: '200px' }} src={props.tralioImage} alt='Tralio' />
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Typography
                    style={{
                        width: '80%',
                        paddingTop: '50px',
                        paddingBottom: '50px',
                        textAlign: 'center',
                    }}
                >
                    {props.tralioDescription1}
                </Typography>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Typography
                    style={{
                        width: '80%',
                        paddingTop: '10px',
                        paddingBottom: '50px',
                        textAlign: 'center',
                    }}
                >
                    {props.tralioDescription2}
                </Typography>
            </div>
        </div>
    );
}

export default Tralio;
