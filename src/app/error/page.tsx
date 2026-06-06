import ErrorMain from '@/app/not-found';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Liro-Studios - Not Found Page",
};

const page = () => {
    return (
        <ErrorMain />
    );
};

export default page;