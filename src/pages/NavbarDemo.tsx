import Navbar from '../components/Navbar/vanillaTSCSS';
import type { NavLink } from '../components/Navbar/vanillaTSCSS';
import './NavbarDemo.css'; 

const NavbarDemo = () => {
    const links: NavLink[] = [
        { text: 'Home', href: '/' },
        { text: 'About', href: '/about' },
        { text: 'Services', href: '/services' },
        { text: 'Contact', href: '/contact' }
    ];

    const handleLinkClick = (link: NavLink) => {
        console.log('Clicked:', link);
    };

    return (
        <div className="demo-page">
            <h1>Navbar Variants</h1>
            
            <section className="demo-section">
                <h2>Light Theme</h2>
                <div className="demo-component">
                <Navbar 
                    brandName="Light Brand"
                    links={links}
                    theme="light"
                    onLinkClick={handleLinkClick}
                />
                </div>
            </section>

            <section className="demo-section">
                <h2>Dark Theme</h2>
                <div className="demo-component">
                <Navbar 
                    brandName="Dark Brand"
                    links={links}
                    theme="dark"
                    onLinkClick={handleLinkClick}
                />
                </div>
            </section>

            <section className="demo-section">
                <h2>With Custom Logo</h2>
                <div className="demo-component">
                <Navbar 
                    logo="/api/placeholder/48/48"
                    brandName="Custom Logo"
                    links={links}
                    onLinkClick={handleLinkClick}
                />
                </div>
            </section>
        </div>
    );
};

export default NavbarDemo;

