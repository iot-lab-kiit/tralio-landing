import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function CloudFeatures(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div style={{display: 'flex', justifyContent: 'center', paddingTop: '50px'}}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ width: '80%'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%' }}>
            <img src={props.featureImage} alt='AWS Feature' style={{ width: '50px', height: '50px'}}/>
          </Typography>
          
          <Typography sx={{ color: 'rgb(35,51,72)', fontSize: '30px', paddingLeft: '10px' }}>{props.feature}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ paddingTop: '15px', fontSize: '20px', fontWeight: 'bold', color: 'rgba(25, 129, 255, 1)' }}>
            {'Description'}
          </Typography>
          <Typography sx={{ color: 'black' }}>
            {props.description}
          </Typography>
          <Typography sx={{ paddingTop: '30px', fontSize: '20px', fontWeight: 'bold', color: 'rgba(25, 129, 255, 1)' }}>
            {'Why Tralio need it ?'}
          </Typography>
          <Typography sx={{ color: 'black' }}>
            {props.need}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}