import Slider from "react-slick";
import SubComponent from './SubComponent';
import Container from "@mui/material/Container";
import { Typography } from '@mui/material';

function NextUpdates(props) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:false,
    speed: 1000,
    autoplaySpeed: 3000,
    pauseOnHover:true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const generateNextUpdates = props.data.map(
    ({ id, updateImage, updateTitle, updateDescription }, index) => {
      return (
        <SubComponent
          key={id}
          updateImage={updateImage}
          updateTitle={updateTitle}
          updateDescription={updateDescription}
        />
      );
    }
  );

  return (
    <Container style={{width: '80%'}}>
      <Typography variant='h4' style={{textAlign: 'center', paddingTop: '10px', paddingBottom: '30px', fontWeight: 'bold', color: 'rgba(35, 51, 72)'}}>
        Next Updates
      </Typography>
      <Slider {...settings}>{generateNextUpdates}</Slider>
    </Container>
  );
}

export default NextUpdates;
