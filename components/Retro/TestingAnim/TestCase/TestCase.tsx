import { useEffect, useState } from "react";
import { sleep } from "../../../../utils/sleep";
import * as S from "./TestCaseAtoms";

interface TestCaseProps {
  start: number;
  finish: number;
  text: string;
  visible: boolean;
}

export const TestCase = ({ start, finish, text, visible }: TestCaseProps) => {
  const [state, setState] = useState<"init" | "start" | "finish">("init");

  const updateState = async () => {
    await sleep(start);
    setState("start");
    await sleep(finish);
    setState("finish");
  };

  useEffect(() => {
    if (visible) {
      updateState();
    }
  }, [visible]);

  const Hightlight = () => {
    switch (state) {
      case "init":
        return <></>;
      case "start":
        return <S.Highlight color="yellow">RUNS</S.Highlight>;
      case "finish":
        return <S.Highlight color="#00b56c">PASS</S.Highlight>;
    }
  };
  return (
    <S.Row>
      {state !== "init" ? (
        <>
          <Hightlight /> {text}
        </>
      ) : (
        <></>
      )}
    </S.Row>
  );
};
