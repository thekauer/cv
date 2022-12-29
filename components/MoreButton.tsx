import { useTranslation } from "next-i18next";
import Router from "next/router";
import styled from "styled-components";
const Button = styled.button`
  border: solid 3px #2e2e2e;
  border-radius: 1px;
  background: #58585833;
  padding: 0.5em;
  color: var(--font-color);
  transition: var(--transition-time);
  font-weight: bold;
  &:hover {
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5), 0 0 5px black;
  }
`;
interface MoreButtonProps {
  to: string;
}
export const MoreButton = ({ to }: MoreButtonProps) => {
  const handleClick = () => {
    Router.push(to);
  };
  const { t } = useTranslation("common");
  return (
    <>
      <Button onClick={handleClick} className="MoreButton">
        {t("more")}
      </Button>
    </>
  );
};
