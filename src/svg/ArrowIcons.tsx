 

interface ArrowSvgProps {
    width?: number | string;
    height?: number | string;
    viewBox?: string;
    pathValue?: string;
    strokeWidth?: number | string;
    color?: string;
}

export const ArrowSvg: React.FC<ArrowSvgProps> = ({ width = "10", height = "10", strokeWidth = "1.5", viewBox = "0 0 10 10", pathValue = "M1 9L9 1M9 1H1M9 1V9", color = "currentcolor" }) => {
    return (
        <svg width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d={pathValue} stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export const ArrowTwenty = () => {
    return (
            <svg xmlns="http://www.w3.org/2000/svg" width="81" height="9" viewBox="0 0 81 9" fill="none">
                <rect y="4" width="80" height="1" fill="#ffffff" />
                <path d="M77 7.96366L80.5 4.48183L77 1" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
    );
};

export const ArrowTwentyOne = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M2.41379 3.30208C5.97452 3.05821 10.6092 1.55558 14 0C12.4438 3.39014 10.9406 8.02425 10.6973 11.585L8.35796 6.59396L1.14867 13.8038C1.02249 13.9296 0.851498 14.0003 0.673273 14.0001C0.540303 14.0001 0.410328 13.9606 0.299776 13.8867C0.189224 13.8129 0.103059 13.7079 0.0521774 13.585C0.00129604 13.4622 -0.0120192 13.327 0.0139141 13.1966C0.0398474 13.0661 0.103867 12.9463 0.197876 12.8523L7.40747 5.64271L2.41379 3.30208Z" fill="currentColor" />
        </svg>
    );
};

export const ArrowHeroIcon = ({ direction = "right" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="22" viewBox="0 0 12 22" fill="none">
            <path d={direction === 'right' ? "M1 21L11 11L1 1" : "M11 21L1 11L11 1"} stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export const ArrowNextPrevIcon = ({ direction = 'right', strokeColor = 'white' }) => (
    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d={direction === 'right' ? "M1 13L7 7L1 1" : "M7 1L1 7L7 13"}
            stroke={strokeColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export const BacktoTopArrow = () => {
    return (
        <svg
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11 6L6 1L1 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

interface SvgProps {
    color?: string;
}

export const ArrowSeven: React.FC<SvgProps> = ({ color = "#E9FF48" }) => {
    return (
        <svg width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M77.4231 0.5H3.57692C1.87846 0.5 0.5 1.87846 0.5 3.57692C0.5 5.27538 1.87846 6.65385 3.57692 6.65385H69.9939L1.40154 75.2477C0.2 76.4492 0.2 78.3969 1.40154 79.5985C2.00308 80.2 2.78923 80.5 3.57692 80.5C4.36462 80.5 5.15231 80.2 5.75231 79.5985L74.3462 11.0046V77.4231C74.3462 79.1215 75.7246 80.5 77.4231 80.5C79.1215 80.5 80.5 79.1215 80.5 77.4231V3.57692C80.5 1.87846 79.1215 0.5 77.4231 0.5Z" fill={color} />
            </svg>
    );
};

export const ArrowNine: React.FC = () => {
    return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 11L11 1M11 1H1M11 1V11" stroke="#21212D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
    );
};

export const ArrowTen = ({ strokeColor = "#21212D" }) => {
    return (
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 9L9 1M9 1H1M9 1V9" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
    );
};
export const ArrowTwentyEight = () => {
    return (
        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 9.99999H15.2222M8.11121 1.11108L17.0001 9.99997L8.11121 18.8889" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
    );
};

export const ArrowTwo = ({ width = "102", height = "9" }: { width?: string; height?: string }) => (
    <svg width={width} height={height} viewBox="0 0 102 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M98 8L101.5 4.5L98 1M1 4H101V5H1V4Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
);

export const ArrowTwentyFive = ({ width = "732" }: { width?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height="9" viewBox="0 0 732 9" fill="none">
            <path d="M728 7.96512L731.5 4.48256L728 1M1 4H731V5H1V4Z" stroke="#000" strokeOpacity="0.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
);

export const BacktoTopArrowFooter = () => {
    return (
        <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 19V1M8 1L1 8M8 1L15 8" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
    );
};

export const ArrowThirteen = ({ width = "14", height = "14", viewBox = "0 0 14 14", pathValue = "M1 13L13 1", pathValueTwo = "M1 1H13V13", color = "currentColor", strokeWidth = 2 }: any) => (
    <svg width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d={pathValue} stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <path d={pathValueTwo} stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
