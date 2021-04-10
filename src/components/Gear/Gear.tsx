import '../../index.css'

export const Gear: React.FC<{ customClass?: string }> = ({ customClass }) => {
    return (
        <div className={customClass}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320" >
            <g id="outside"><path d="M317.86,181.73v-45L276.42,126.6a120.45,120.45,0,0,0-10.65-25.69L287.16,64,255.34,32.15l-36.2,22A119.88,119.88,0,0,0,192.8,43.21L182,2.7H137l-9.91,40.53a120.6,120.6,0,0,0-26.3,10.93l-36.37-21L32.6,64.93l21.73,35.79A120.62,120.62,0,0,0,43.4,127.27L2.86,138.08v45l40.8,10a120.65,120.65,0,0,0,11,26.27L33.55,255.84l31.82,31.82,36.21-22a120.75,120.75,0,0,0,25.71,10.55l11.07,41.47h45L193.55,276a120.29,120.29,0,0,0,25.66-10.75l37.08,21.47,31.82-31.82-22.22-36.61a120,120,0,0,0,10.53-25.5Z"  /></g>
            <g id="inside"><circle cx="161.5" cy="160" r="54.5" /></g>
            <g id="outline"><path d="M178.16,8,188,44.79l.73,2.75,2.75.78a115.35,115.35,0,0,1,25.24,10.46l2.55,1.43,2.49-1.51,32.85-19.94L280.9,65.08,261.44,98.7,260,101.16l1.38,2.48a115.72,115.72,0,0,1,10.21,24.62l.79,2.8,2.83.69,37.63,9.2v37.23l-37.72,10.06-2.75.73-.78,2.74a115.42,115.42,0,0,1-10.09,24.45l-1.41,2.53,1.51,2.49,20.18,33.24-26.33,26.33-33.75-19.54-2.47-1.43-2.49,1.4a115.66,115.66,0,0,1-24.59,10.3l-2.79.8-.68,2.82L179.43,313H142.2l-10.07-37.76-.74-2.76-2.75-.77A115.63,115.63,0,0,1,104,261.6l-2.54-1.4L99,261.71,66.13,281.65,39.81,255.32,59,222.13l1.44-2.48L59,217.16A115.54,115.54,0,0,1,48.47,192l-.8-2.79-2.82-.69-37-9V142.22l36.83-9.82,2.77-.74.76-2.76A115.59,115.59,0,0,1,58.7,103.46l1.42-2.54-1.51-2.49L38.91,66,65.24,39.65,98.29,58.79l2.46,1.43,2.49-1.4a115.88,115.88,0,0,1,25.21-10.48l2.81-.79.69-2.83,9-36.72h37.23M182,3H137l-9.91,40.53a120.11,120.11,0,0,0-26.3,10.93L64.42,33.4,32.6,65.22,54.33,101A120.43,120.43,0,0,0,43.4,127.57L2.86,138.38v45l40.8,10a120.53,120.53,0,0,0,11,26.28L33.55,256.14,65.37,288l36.21-22a120.2,120.2,0,0,0,25.71,10.54L138.36,318h45l10.19-41.72a120.26,120.26,0,0,0,25.66-10.74L256.29,287l31.82-31.82-22.22-36.6a120.1,120.1,0,0,0,10.53-25.51l41.44-11V137L276.42,126.9a120.54,120.54,0,0,0-10.65-25.7l21.39-36.94L255.34,32.44l-36.2,22A120.4,120.4,0,0,0,192.8,43.5L182,3Z" /></g>
            <g id="circle"><path d="M206.37,128.23a57,57,0,0,1-6.89,72,56.14,56.14,0,0,1-79.78,0,57.44,57.44,0,0,1-6.89-8.41,56.78,56.78,0,0,1-8.49-20.32,57.24,57.24,0,0,1,3.29-33.57,56.67,56.67,0,0,1,5.2-9.65,57.44,57.44,0,0,1,6.89-8.41,56.12,56.12,0,0,1,61.85-12.18" /><path d="M173.8,230.94a37,37,0,0,1-5.12,1.09"  /><path d="M190.26,225.73a68.28,68.28,0,0,1-6.59,2.43"  /><path d="M231.67,167.59q-.37,3.63-1.09,7.16t-1.77,6.92c-.7,2.26-1.5,4.48-2.41,6.64a68.9,68.9,0,0,1-3,6.31q-1.65,3.07-3.59,5.95c-1.28,1.92-2.66,3.78-4.12,5.56s-3,3.49-4.63,5.13-3.32,3.19-5.09,4.66-3.61,2.86-5.52,4.15" /></g>
            <g id="lines"><line x1="139" y1="148.5" x2="181" y2="148.5" /><line x1="150.5" y1="169.5" x2="169.5" y2="169.5"  /></g>
        </svg>
        </div>
    );
}