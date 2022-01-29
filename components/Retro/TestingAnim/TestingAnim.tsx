import * as S from "./TestingAnimAtomts";
import { Fade } from "react-awesome-reveal";
import { useEffect, useState } from "react";
import { sleep } from "../../../utils/sleep";
import { TestCase } from "./TestCase/TestCase";

export const TestingAnim = () => {
  const initialDelay = 1000;
  const typeDelay = 70;
  const terminalText = "npm run dev";
  const prompt = "λ: ";
  const firstFinish = initialDelay + terminalText.length * typeDelay;

  const [position, setPosition] = useState(prompt.length);
  const [visible, setVisible] = useState(false);

  const updatePosition = async () => {
    await sleep(initialDelay);
    let pos = prompt.length;
    while (pos < prompt.length + terminalText.length) {
      setPosition(pos);
      await sleep(typeDelay - 20);
      pos++;
    }
  };

  useEffect(() => {
    if (visible) {
      updatePosition();
    }
  }, [visible]);
  return (
    <S.Terminal>
      <S.Row>
        {prompt}
        <S.Cursor position={position} />
        {terminalText.split("").map((char, i) => (
          <Fade
            key={i}
            triggerOnce
            delay={initialDelay + i * typeDelay}
            duration={0.1}
            onVisibilityChange={(visible) => {
              if (visible) setVisible(true);
            }}
          >
            <span>{char === " " ? <span>&nbsp;</span> : char}</span>
          </Fade>
        ))}
      </S.Row>
      <br />
      {["Dashboard.spec.tsx", "App.spec.tsx", "Dnd.spec.tsx"].map((text, i) => (
        <TestCase
          key={i}
          start={initialDelay + terminalText.length * typeDelay + 400}
          finish={firstFinish + i * 50}
          text={text}
          visible={visible}
        />
      ))}
    </S.Terminal>
  );
};
