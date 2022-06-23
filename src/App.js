import CloudFeatures from './components/CloudFeatures/CloudFeatures';
import CloudFeaturesData from './CloudFeaturesData';
import NextUpdates from './components/NextUpdates/NextUpdates';
import NextUpdatesData from './NextupdatesData';
import Tralio from './components/Tralio/Tralio';
import tralioData from './TralioData';
import { Box, Typography } from '@mui/material';
import Footer from './components/Footer/Footer';

function App() {
    function generateCloudFeatures(props) {
        return (
            <CloudFeatures
                key={props.id}
                feature={props.feature}
                description={props.description}
                need={props.need}
                featureImage={props.featureImage}
            />
        );
    }

    return (
        <div>
            <Typography
                variant='h4'
                sx={{
                    paddingTop: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    color: 'rgb(35,51,72)',
                }}
            >
                {'What is Tralio ?'}
            </Typography>
            <div>
                <Tralio
                    tralioImage={tralioData.tralioImage}
                    tralioDescription1={tralioData.tralioDescription1}
                />
            </div>
            <Box
                sx={{
                    paddingTop: '4%',
                    paddingBottom: '4%',
                    background:
                        'linear-gradient(183.41deg, #67C3F3 -8.57%, #5A98F2 82.96%)',
                }}
            >
                <NextUpdates data={NextUpdatesData} />
            </Box>
            <div>
                <Typography
                    variant='h4'
                    sx={{
                        paddingTop: '100px',
                        display: 'flex',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        color: 'rgb(35,51,72)',
                    }}
                >
                    {'AWS Requirements'}
                </Typography>
                {CloudFeaturesData.map(generateCloudFeatures)}
            </div>
            <div style={{ paddingTop: '100px' }}>
                <Footer />
            </div>
        </div>
    );
}

export default App;
