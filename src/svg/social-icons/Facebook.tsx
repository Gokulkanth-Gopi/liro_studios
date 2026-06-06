 
interface FacebookSvgProps {
    width?: string | number;
    height?: string | number;
    color?: string;
}
export const FacebookSvg: React.FC<FacebookSvgProps> = ({ width = "16", height = "16", color = "currentcolor" }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 0H5.81818C4.85376 0 3.92883 0.383116 3.24688 1.06507C2.56493 1.74702 2.18182 2.67194 2.18182 3.63636V5.81818H0V8.72727H2.18182V14.5455H5.09091V8.72727H7.27273L8 5.81818H5.09091V3.63636C5.09091 3.44348 5.16753 3.25849 5.30392 3.1221C5.44031 2.98571 5.6253 2.90909 5.81818 2.90909H8V0Z" fill={color} />
        </svg>
    );
};

export const FacebookTwo: React.FC = () => {
    return (
        <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M1.82727 6.83333C1.14284 6.83333 1 6.96763 1 7.61111V8.77778C1 9.42126 1.14284 9.55556 1.82727 9.55556H3.48182V14.2222C3.48182 14.8657 3.62466 15 4.30909 15H5.96364C6.64807 15 6.79091 14.8657 6.79091 14.2222V9.55556H8.64871C9.1678 9.55556 9.30155 9.4607 9.44416 8.99145L9.7987 7.82478C10.043 7.02095 9.89246 6.83333 9.00326 6.83333H6.79091V4.88889C6.79091 4.45933 7.16129 4.11111 7.61818 4.11111H9.97273C10.6572 4.11111 10.8 3.97681 10.8 3.33333V1.77778C10.8 1.1343 10.6572 1 9.97273 1H7.61818C5.33373 1 3.48182 2.74111 3.48182 4.88889V6.83333H1.82727Z" stroke="currentcolor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
    );
};
