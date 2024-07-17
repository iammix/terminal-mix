import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi There!!<HighlightSpan>Konstantinos Mixios</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>Software Engineer</HighlightAlt> based in Thessaloniki,
        Greece.
      </p>
      <p>
        I am passionate about writing codes and <br />
        developing applications to solve real-life challenges.
      </p>
    </AboutWrapper>
  );
};

export default About;
