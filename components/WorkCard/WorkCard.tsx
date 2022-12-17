import * as S from "./WorkCard.atoms";
import Image from "next/image";
import { MoreButton } from "../MoreButton";
import { Fade } from "react-awesome-reveal";

interface WorkCardProps {
  logo: string;
  path: string;
  title: string;
  icons: { src: string; alt: string }[];
  from: string;
  to: string;
}

export const WorkCard = ({
  logo,
  path,
  title,
  icons,
  from,
  to,
}: WorkCardProps) => {
  return (
    <S.Container from={from} to={to}>
      <S.Header>
        <S.Logo>
          <Image layout="fill" src={logo} />
        </S.Logo>
        <h2>{title}</h2>
      </S.Header>
      <S.LogoContainer>
        {icons.map((icon, index) => (
          <Fade triggerOnce delay={150 * index} key={index}>
            <Image {...icon} width="24" height="24" />
          </Fade>
        ))}
      </S.LogoContainer>
      <S.Footer>
        <MoreButton to={path} />
      </S.Footer>
    </S.Container>
  );
};
