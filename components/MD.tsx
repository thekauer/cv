import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm';
import MathJax from 'react-mathjax';
import remarkMath from 'remark-math';



interface MDProps  {
    content : string
}
export const MD = ({content} : MDProps) => {
    const newProps = {
        plugins: [
          gfm,
          remarkMath,
        ],
        renderers: {
          math: (props:any) => 
            <MathJax.Node formula={props.value} />,
          inlineMath: (props:any) =>
            <MathJax.Node inline formula={props.value} />
        }
      };
    return (
        <MathJax.Provider options={{input:"tex"}}>
        <ReactMarkdown {...newProps} children={content} />
        </MathJax.Provider>
        );
}