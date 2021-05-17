import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm';
import remarkMath from 'remark-math';
import Tex from '@matejmazur/react-katex'


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
            <Tex math={props.value} block/>,
          inlineMath: (props:any) =>
            <Tex math={props.value}/>
        }
      };
    return (
        <ReactMarkdown {...newProps} children={content} />
        );
}