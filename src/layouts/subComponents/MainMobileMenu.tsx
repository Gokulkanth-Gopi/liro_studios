import mobileMenuData from '@/data/header-menu/mobileMenuData';
 
import Link from 'next/link';

const MainMobileMenu = () => {
    return (
        <ul>
            {mobileMenuData.map((menuItem) => (
                <li key={menuItem.id}>
                    <Link href={menuItem.link} aria-label={`Navigate to our ${menuItem.title} page`}>
                        {menuItem.title}
                    </Link>
                </li>
             
            ))}
        </ul>
    );
};

export default MainMobileMenu;