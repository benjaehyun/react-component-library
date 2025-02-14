import VanillaNavbar from '../components/Navbar/vanillaTSCSS';
import TailwindNavbar from '../components/Navbar/tailwindTS/Navbar';
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
            
            <div className="implementation-section">
                <h2>Vanilla CSS Implementation</h2>
                
                <section className="demo-section">
                    <h3>Light Theme</h3>
                    <div className="demo-component">
                        <VanillaNavbar 
                            brandName="Light Brand"
                            links={links}
                            theme="light"
                            onLinkClick={handleLinkClick}
                        />
                    </div>
                </section>

                <section className="demo-section">
                    <h3>Dark Theme</h3>
                    <div className="demo-component">
                        <VanillaNavbar 
                            brandName="Dark Brand"
                            links={links}
                            theme="dark"
                            onLinkClick={handleLinkClick}
                        />
                    </div>
                </section>

                <section className="demo-section">
                    <h3>With Custom Logo</h3>
                    <div className="demo-component">
                        <VanillaNavbar 
                            logo="/api/placeholder/48/48"
                            brandName="Custom Logo"
                            links={links}
                            onLinkClick={handleLinkClick}
                        />
                    </div>
                </section>
            </div>

            <div className="implementation-section">
                <h2>Tailwind CSS Implementation</h2>
                
                <section className="demo-section">
                    <h3>Light Theme</h3>
                    <div className="demo-component">
                        {/* @ts-ignore - since we're using the JS version with TS types */}
                        <TailwindNavbar 
                            brandName="Light Brand"
                            links={links}
                            theme="light"
                            onLinkClick={handleLinkClick}
                        />
                    </div>
                </section>

                <section className="demo-section">
                    <h3>Dark Theme</h3>
                    <div className="demo-component">
                        {/* @ts-ignore - since we're using the JS version with TS types */}
                        <TailwindNavbar 
                            brandName="Dark Brand"
                            links={links}
                            theme="dark"
                            onLinkClick={handleLinkClick}
                        />
                    </div>
                </section>

                <section className="demo-section">
                    <h3>With Custom Logo</h3>
                    <div className="demo-component">
                        {/* @ts-ignore - since we're using the JS version with TS types */}
                        <TailwindNavbar 
                            logo="/api/placeholder/48/48"
                            brandName="Custom Logo"
                            links={links}
                            onLinkClick={handleLinkClick}
                        />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default NavbarDemo;