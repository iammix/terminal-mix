import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>My education background</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "B.Sc in Civil Engineering",
    desc: "Aristotle University of Thessaloniki | 2013 ~ 2018",
  },
  {
    title: "MASc. in Structural Engineering",
    desc: "Aristotle University of Thessaloniki| 2018 - 2019",
  },
];

export default Education;
