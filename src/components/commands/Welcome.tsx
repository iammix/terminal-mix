import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
        </PreName>
        <PreWrapper>
        </PreWrapper>
        <div>Welcome to mixi-os Terminal.</div>
        <Seperator>----</Seperator>
        <div>
          For available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
      </div>
    </HeroContainer>
  );
};

export default Welcome;
