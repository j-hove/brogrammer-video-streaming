import styled from "styled-components";
import ImgSlider from "../components/ImgSlider";
import NewVinta from "../components/NewVinta";
import Originals from "../components/Originals";
import Recommends from "../components/Recommends";
import Trending from "../components/Trending";
import Viewers from "../components/Viewers";


const Home = () => {
    return (
        <Container>
            <ImgSlider /> 
            <Viewers />
            <Recommends type="recommend" />
            <NewVinta type="new" />
            <Originals type="original" />
            <Trending type="trending" />          
        </Container>
    )
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home