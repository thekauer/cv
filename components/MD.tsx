import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm';



interface MDProps  {
    content : string
}
export const MD = ({content} : MDProps) => {
    return (
        <ReactMarkdown plugins={[gfm]} children={content} />
        );
}