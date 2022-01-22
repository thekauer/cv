import React, { createRef, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { MD } from "../components/MD";
import html2canvas from "html2canvas";

//#region Page Styles
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const MainMenu = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background-color: var(--theme-mid);
  box-shadow: inset 0px 2px 16px rgba(0, 0, 0, 0.2);
  padding: 0.2em 0;
  padding-right: 2em;
`;
const MenuButton = styled.button`
  background: transparent;
  padding: 0.1em;
  margin: 0 0.2em;
  border: none;
  border-radius: 5px;

  &:hover {
    background: var(--theme-light);
  }
  &.active {
    background: var(--theme-light);
  }
`;

const Button = styled.button`
  border: 2px solid var(--theme-light);
  background-color: transparent;
  padding: 0.5em;
  &:hover {
    background-color: var(--theme-light);
  }
`;
const Icon = styled.div<{ path: string }>`
  width: 2em;
  height: 2em;
  background: var(--nav-font-color);
  mask: url(${(props: any) => props.path}) no-repeat center / contain;
`;
const EditorContainer = styled.div`
  flex: 1;
  min-height: 8em;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const SideMenu = styled.div``;
const SideMenuContainer = styled.div`
  height: 100%;
  padding: 2em;
  box-shadow: inset 2px 0 8px rgba(0, 0, 0, 0.5);
  border-left: 2px solid var(--theme-light);
  border-bottom: 2px solid var(--theme-light);
`;
const Editor = styled.div`
  display: grid;
  place-content: center;
  flex-grow: 1;
  min-width: 400px;
  border-spacing: 0;
  & strong {
    font-weight: bolder;
    background-color: transparent;
  }
  &:focus {
    border: 1px solid var(--blue);
  }
`;

const InfoLine = styled.div`
  margin: 1.5em 0.5em;
`;
const KBD = styled.kbd`
  margin: 0.5em;
  padding: 0.5em;
  border-radius: 5px;
  border: 1px solid var(--theme-light);
  cursor: default;
  &:hover {
    box-shadow: 0 0 8px var(--theme-mid);
  }
`;
//#endregion

//#region Strutogram Element Styles
const Function = styled.div`
  display: grid;
  place-content: center;
`;
const Signature = styled.div`
  padding: 0.5em;
  border-radius: 25px;
  border: solid 2px var(--theme-mid);
  min-width: 6em;
  min-height: 0.5em;
  &:hover,
  &.selected {
    background-color: var(--theme-light);
    cursor: pointer;
  }
  &.active {
    border: 1px solid var(--blue);
  }
`;
const Line = styled.div`
  width: 1px;
  height: 1em;
  border-left: 1px solid var(--theme-mid);
  background-color: var(--theme-mid);
  justify-self: center;
`;
const Statement = styled.div`
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  outline: solid 2px var(--theme-mid);
  outline-offset: -1px;
  min-width: 6em;
  min-height: 0.5em;
  &:hover,
  &.selected {
    background-color: var(--theme-light);
    cursor: pointer;
  }
  &.active {
    background-color: var(--blue);
  }
`;
const IfElse = styled.div`
  padding: 0.5em;
  outline: solid 2px var(--theme-mid);
  outline-offset: -1px;
  display: grid;
  place-content: center;
  min-width: 6em;
  min-height: 0.5em;
  background: url("/static/ifelsebg.svg") no-repeat bottom / contain;

  &:hover,
  &.selected {
    background-color: var(--theme-light);
    cursor: pointer;
  }
  &.active {
    background-color: var(--blue);
  }
`;
const IfElseContainer = styled.div`
  display: flex;
`;
const If = styled.div`
  outline: solid 2px var(--theme-mid);
  outline-offset: -1px;
  min-width: 6em;
  min-height: 0.5em;
  justify-self: flex-start;
  flex: 1;
  &:hover {
    background-color: var(--theme-light);
  }
  &.active {
    background-color: var(--blue);
  }
`;
const Else = styled.div`
  outline: solid 2px var(--theme-mid);
  outline-offset: -1px;
  min-width: 6em;
  min-height: 0.5em;
  justify-self: flex-end;
  flex: 1;
  &:hover {
    background-color: var(--theme-light);
  }
  &.active {
    background-color: var(--blue);
  }
`;
const LoopContainer = styled.div`
  display: grid;
  grid-template-columns: 2em auto;
  outline: solid 2px var(--theme-mid);
  outline-offset: -1px;
`;
const Loop = styled.div`
  grid-row: 1;
  grid-column: 1 / 3;
  padding: 0.5em;
  min-width: 6em;
  min-height: 0.5em;
  display: grid;
  place-content: center;
  &:hover,
  &:hover + div,
  &.selected,
  &.selected + div {
    background-color: var(--theme-light);
    cursor: pointer;
  }
  &.active,
  &.active + div {
    background-color: var(--blue);
  }
`;
const LoopLeft = styled.div`
  grid-row: 2;
  grid-column: 1;
  width: 2em;
  outline-offset: -1px;
`;
const LoopRight = styled.div`
  grid-row: 2;
  grid-column: 2;
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  background-color: transparent;
  border: none;
  padding: 0.5em;
  min-width: 90%;
`;
//#endregion
//#region Code
interface CodeProps {
  content: string;
}
const Code = ({ content }: CodeProps) => {
  const inputRef = createRef<HTMLInputElement>();
  const [editing, setEditing] = useState(false);
  const [newContnet, setNewContent] = useState(content);
  const asLatex = () => {
    //logical
    let parsed = newContnet

      .replace(/==/g, "=")
      .replace(/!=/g, "\\neq ")
      .replace(/&&/g, "\\land ")
      .replace(/\|\|/g, "\\lor ")
      .replace(/!/g, "\\lnot ")
      .replace(/<=/g, "\\le ")
      .replace(/>=/g, "\\ge ")

      //types
      .replace(/:\ +R/g, ":\\mathbb{R} ")
      .replace(/in\ +R/g, "\\in\\mathbb{R} ")
      .replace(/:\ +N/g, ":\\mathbb{N} ")
      .replace(/in\ +N/g, "\\in\\mathbb{N} ")
      .replace(/:\ +Z/g, ":\\mathbb{Z} ")
      .replace(/in\ +Z/g, "\\in\\mathbb{Z} ")
      .replace(/:\ +S/g, ":\\mathbb{S} ")
      .replace(/in\ +S/g, "\\in\\mathbb{S} ")
      .replace(/:\ +L/g, ":\\mathbb{L} ")
      .replace(/in\ +L/g, "\\in\\mathbb{L} ")

      //misc
      .replace(/(?<=\^*) x/g, "\\times")
      .replace(/return/g, "\\bold{return }")
      .replace(/SKIP/gi, "\\text{SKIP}")
      .replace(/null/g, "\\text{Ø}");
    return "$" + parsed + "$";
  };
  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editing]);
  return (
    <>
      {!editing ? (
        <div onClick={(e) => setEditing(true)}>
          <MD content={asLatex()} />
        </div>
      ) : (
        <Input
          ref={inputRef}
          value={newContnet}
          onChange={(e) => setNewContent(e.target.value)}
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              setEditing(false);
            }
          }}
        />
      )}
    </>
  );
};
//#endregion
//#region NewItemMenu
const StyledNewItemMenu = styled.div`
  display: flex;
  z-index: 10;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  flex-direction: row;
  justify-content: center;
  align-self: center;
  gap: 2em;
  background-color: var(--theme-dark);
  padding: 2em;

  &:focus {
    border: 3px solid var(--blue);
  }
`;
const Option = styled.div`
  padding: 1em;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  & span {
    margin-bottom: 0.5em;
  }
  &:hover,
  &.selected {
    background-color: var(--theme-light);
  }
`;
interface NewItemMenuProps {
  editorState: EditorState;
  setEditorState: React.Dispatch<React.SetStateAction<EditorState>>;
}
const NewItemMenu = ({ editorState, setEditorState }: NewItemMenuProps) => {
  const [selected, setSelected] = useState(0);
  const keyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key == "ArrowLeft") {
      if (selected > 0) {
        setSelected(selected - 1);
      }
    }
    if (e.key == "ArrowRight") {
      if (selected < 2) {
        setSelected(selected + 1);
      }
    }
    if (e.key == "Enter") {
      click(selected);
    }
  };
  const click = (id: number) => {
    setSelected(id);
    let newType: CodeType = CodeType.Statement;
    switch (id) {
      case 0:
        newType = CodeType.Statement;
        break;
      case 1:
        newType = CodeType.IfElse;
        break;
      case 2:
        newType = CodeType.Loop;
        break;
    }
    setEditorState({
      ...editorState,
      newType: newType,
      insertDirection: InsertDirection.None,
    });
  };
  useEffect(() => {
    document.getElementById("NewItemMenu")?.focus();
  });
  return (
    <>
      <StyledNewItemMenu
        tabIndex={0}
        id="NewItemMenu"
        onKeyDown={(e) => keyDown(e)}
      >
        <Option
          className={selected == 0 ? "selected" : ""}
          onClick={() => click(0)}
        >
          <span>Állítás</span>
          <Statement></Statement>
        </Option>
        <Option
          className={selected == 1 ? "selected" : ""}
          onClick={() => click(1)}
        >
          <span>Elágazás</span>
          <IfElse></IfElse>
          <IfElseContainer>
            <If>
              <Statement></Statement>
            </If>
            <Else>
              <Statement></Statement>
            </Else>
          </IfElseContainer>
        </Option>
        <Option
          className={selected == 2 ? "selected" : ""}
          onClick={() => click(2)}
        >
          <span>Ciklus</span>
          <LoopContainer>
            <Loop></Loop>
            <LoopLeft />
            <LoopRight>
              <Statement></Statement>
            </LoopRight>
          </LoopContainer>
        </Option>
      </StyledNewItemMenu>
    </>
  );
};
//#endregion
//#region Side Menus
const PlayMenu = () => {
  return (
    <>
      <h1>Play</h1>
    </>
  );
};
const ExportMenu = () => {
  const Click = () => {
    let main = document.getElementById("function_main");
    if (main) {
      html2canvas(main).then((canvas) => {
        let link = document.createElement("a");
        link.download = "stuki.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
      });
    }
  };
  return (
    <>
      <h3>Export</h3>
      <Button onClick={Click}>Mentés</Button>
    </>
  );
};

const InfoMenu = () => {
  const examples = ["n in N^{* x N}_{2}", "!(a&&b)"];
  return (
    <>
      <h3>Info</h3>
      <h4>Példák</h4>
      {examples.map((ex) => {
        return (
          <>
            <InfoLine>
              <code>{ex}</code>
              <Code content={ex} />
            </InfoLine>
          </>
        );
      })}
      <h4>Vezérlés</h4>
      <InfoLine>
        <KBD>&uarr;</KBD>
        <KBD>&darr;</KBD>
        <KBD>&larr;</KBD>
        <KBD>&rarr;</KBD>
      </InfoLine>
      <h4>Beszúrás</h4>
      <InfoLine>
        <KBD>CTRL</KBD>+<KBD>&uarr;</KBD>
      </InfoLine>
      <InfoLine>
        <KBD>CTRL</KBD>+<KBD>&darr;</KBD>
      </InfoLine>
      <h4>Törlés</h4>
      <InfoLine>
        <KBD>&nbsp;&nbsp;&larr;&nbsp;&nbsp;</KBD>
        <KBD>Del</KBD>
      </InfoLine>
    </>
  );
};
//#endregion
//#region Structogram Interface
enum CodeType {
  Signature,
  Function,
  Statement,
  IfElse,
  Loop,
}
enum InsertDirection {
  Up,
  Down,
  None,
}
interface ICode {
  type: CodeType;
  content: string;
}
interface ISignature extends ICode {}
interface IStatement extends ICode {}
interface IIfElse extends ICode {
  condition: string;
  ifBranch: ICode[];
  elseBranch: ICode[];
}
interface ILoop extends ICode {
  head: string;
  body: ICode[];
}
interface IFunction {
  signature: ISignature;
  body: ICode[];
}

interface EditorState {
  functions: IFunction[];
  insertDirection: InsertDirection;
  newType?: CodeType;
  editing: boolean;
  currentFunction: number;
  x: number;
  y: number;
}
//#endregion

const Stuki = () => {
  const [activeMenu, setActiveMenu] = useState(-1);
  const editorRef = createRef<HTMLDivElement>();
  const [editorState, setEditorState] = useState<EditorState>({
    functions: [
      {
        signature: {
          content: "labirinth(L/1: N^{m x n}, B : N^2, K: N^2)",
          type: CodeType.Signature,
        },
        body: [
          {
            content: "D:= < <0,1>, <0,-1> , <-1,0> , <1,0> >",
            type: CodeType.Statement,
          },
          {
            head: "i:=1..m",
            body: [
              {
                head: "j:=1..n",
                body: [
                  {
                    content: "P:=<i,j>",
                    type: CodeType.Statement,
                  },
                  {
                    content: "d(P):=+\\infty, \\pi(P):=null",
                    type: CodeType.Statement,
                  },
                ],
                type: CodeType.Loop,
              } as ILoop as any,
            ],
            type: CodeType.Loop,
          } as ILoop,
          { content: "d(B):=0,Q: Queue, Q.add(B)", type: CodeType.Statement },
          {
            head: "!Q.Empty()",
            body: [
              { content: "u:=Q.rem()", type: CodeType.Statement },

              {
                head: "dir \\in D ",
                body: [
                  {
                    content: "v:=<u_1+dir_1,u_2+dir_2>",
                    type: CodeType.Statement,
                  },
                  {
                    condition: "isNeighbour(v,L,m,n) && d(v) > d(u)+1",
                    ifBranch: [
                      {
                        content: "d(v):=d(u)+1",
                        type: CodeType.Statement,
                      },
                      {
                        content: "\\pi(v):=u",
                        type: CodeType.Statement,
                      },
                    ],
                    elseBranch: [{ content: "SKIP", type: CodeType.Statement }],
                    type: CodeType.IfElse,
                  } as IIfElse,
                ],
                type: CodeType.Loop,
              } as ILoop,
            ],
            type: CodeType.Loop,
          } as ILoop,
          { content: "return  d(K)", type: CodeType.Statement },
        ],
      },
    ],
    insertDirection: InsertDirection.None,
    editing: false,
    currentFunction: 0,
    x: 0,
    y: -1,
  });
  useEffect(() => {
    editorRef.current?.focus();
  }, []);
  useEffect(() => {
    const getNewStmt = (): ICode => {
      switch (editorState.newType) {
        default:
        case CodeType.Statement:
          return { content: "", type: CodeType.Statement };
        case CodeType.IfElse:
          return {
            condition: "",
            ifBranch: [{ content: "", type: CodeType.Statement }],
            elseBranch: [{ content: "", type: CodeType.Statement }],
          } as IIfElse;
        case CodeType.Loop:
          return {
            head: "",
            body: [{ content: "", type: CodeType.Statement }],
          } as ILoop;
      }
    };
    if (editorState.newType) {
      let newStmt: ICode = getNewStmt();

      let y = editorState.y;
      if (editorState.insertDirection == InsertDirection.Down) {
        y = y + 1;
      }
      editorState.functions[editorState.currentFunction].body.splice(
        y,
        0,
        newStmt
      );
      setEditorState({ ...editorState });
    }
  }, [editorState.newType]);
  const editorKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    const deleteElem = () => {
      let isDeletingFunction = editorState.y == 0;
      if (isDeletingFunction) {
        if (editorState.currentFunction != 0) {
        }
      } else {
        //deleting code
        editorState.functions[editorState.currentFunction].body.splice(
          editorState.y - 1,
          1
        );
        setEditorState({
          ...editorState,
          y: editorState.y - 1,
        });
      }
    };
    const selectElem = () => {
      let selected = document.getElementsByClassName("selected")[0]
        ?.firstChild as HTMLDivElement;
      selected?.click();
    };
    const up = () => {
      if (e.ctrlKey) {
        if (editorState.y >= 0) {
          setEditorState({
            ...editorState,
            insertDirection: InsertDirection.Up,
          });
          return;
        }
      } else {
        if (editorState.y > -1) {
          setEditorState({
            ...editorState,
            y: editorState.y - 1,
          });
          return;
        }
      }
    };
    const down = () => {
      if (e.ctrlKey) {
        if (editorState.y >= 0) {
          setEditorState({
            ...editorState,
            insertDirection: InsertDirection.Down,
          });
          return;
        }
      } else {
        if (
          editorState.y <
          editorState.functions[editorState.currentFunction].body.length
        ) {
          setEditorState({
            ...editorState,
            y: editorState.y + 1,
          });
          return;
        }
      }
    };
    switch (e.key) {
      case "Backspace":
      case "Delete":
        deleteElem();
        return;
      case "ArrowDown":
        down();
        return;
      case "ArrowUp":
        up();
        return;
      case "Enter":
        selectElem();
        return;
    }
  };
  const renderCode = (code: ICode, idx: number, fnIdx: number) => {
    const isSelectedFn = () => editorState.currentFunction == fnIdx;
    switch (code.type) {
      case CodeType.Statement: {
        return (
          <Statement
            className={
              isSelectedFn() && idx + 1 == editorState.y ? "selected" : ""
            }
          >
            <Code content={code.content} />
          </Statement>
        );
      }
      case CodeType.IfElse: {
        return (
          <>
            <IfElse
              className={
                isSelectedFn() && idx + 1 == editorState.y ? "selected" : ""
              }
            >
              <Code content={(code as IIfElse).condition} />
            </IfElse>
            <IfElseContainer>
              <If>
                {(code as IIfElse).ifBranch.map((innerCode, innerIdx) => {
                  return renderCode(innerCode, idx + innerIdx, fnIdx);
                })}
              </If>
              <Else>
                {(code as IIfElse).elseBranch.map((innerCode, innerIdx) => {
                  return renderCode(innerCode, innerIdx, fnIdx);
                })}
              </Else>
            </IfElseContainer>
          </>
        );
      }
      case CodeType.Loop: {
        return (
          <>
            <LoopContainer>
              <Loop
                className={
                  isSelectedFn() && idx + 1 == editorState.y ? "selected" : ""
                }
              >
                <Code content={(code as ILoop).head} />
              </Loop>
              <LoopLeft />
              <LoopRight>
                {(code as ILoop).body.map((innerCode, innerIdx) => {
                  return renderCode(innerCode, innerIdx, fnIdx);
                })}
              </LoopRight>
            </LoopContainer>
          </>
        );
      }
    }
  };
  const renderFn = (fn: IFunction, fnIdx: number) => {
    const isSelectedFn = () => {
      return editorState.currentFunction == fnIdx;
    };
    const body = fn.body.map((code, idx) => {
      return renderCode(code, idx, fnIdx);
    });
    return (
      <>
        <Function id={"function_" + fn.signature.content.split("(")[0]}>
          {[
            <Signature
              className={isSelectedFn() && editorState.y == 0 ? "selected" : ""}
            >
              <Code content={fn.signature.content} />
            </Signature>,
            <Line />,
          ].concat(body as JSX.Element[])}
        </Function>
      </>
    );
  };
  return (
    <>
      <MainContainer>
        <MainMenu>
          <MenuButton
            onClick={() =>
              activeMenu == 0 ? setActiveMenu(-1) : setActiveMenu(0)
            }
            className={activeMenu == 0 ? "active" : ""}
          >
            <Icon path="/static/play.svg" />
          </MenuButton>
          <MenuButton
            onClick={() =>
              activeMenu == 1 ? setActiveMenu(-1) : setActiveMenu(1)
            }
            className={activeMenu == 1 ? "active" : ""}
          >
            <Icon path="/static/export.svg" />
          </MenuButton>
          <MenuButton
            onClick={() =>
              activeMenu == 2 ? setActiveMenu(-1) : setActiveMenu(2)
            }
            className={activeMenu == 2 ? "active" : ""}
          >
            <Icon path="/static/info.svg" />
          </MenuButton>
        </MainMenu>
        <EditorContainer>
          {editorState.insertDirection != InsertDirection.None && (
            <NewItemMenu
              editorState={editorState}
              setEditorState={setEditorState}
            />
          )}
          <SideMenu>
            {activeMenu == 0 && (
              <SideMenuContainer>
                <PlayMenu />
              </SideMenuContainer>
            )}
            {activeMenu == 1 && (
              <SideMenuContainer>
                <ExportMenu />
              </SideMenuContainer>
            )}
            {activeMenu == 2 && (
              <SideMenuContainer>
                <InfoMenu />
              </SideMenuContainer>
            )}
          </SideMenu>
          <Editor
            ref={editorRef}
            tabIndex={0}
            onKeyDown={(e) => editorKeyDown(e)}
          >
            {renderFn(editorState.functions[0], 0)}
          </Editor>
        </EditorContainer>
      </MainContainer>
    </>
  );
};

export default Stuki;
