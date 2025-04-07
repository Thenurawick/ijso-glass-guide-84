
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // External URL for Theory page
  const theoryUrl = "https://lovable.dev/projects/19c031ff-f7fb-4b8a-af7e-324c605cc263";

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-white">
            IJSO <span className="text-ijso-cool-cyan">Guide</span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="space-x-1">
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="/" 
                  className="text-white hover:text-ijso-cool-cyan transition-colors px-3 py-2"
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="#about" 
                  className="text-white hover:text-ijso-cool-cyan transition-colors px-3 py-2"
                >
                  About Us
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white hover:text-ijso-cool-cyan bg-transparent hover:bg-transparent">
                  National Junior Science Olympiad
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="glass backdrop-blur-md border border-white/10 rounded-lg shadow-lg p-3">
                    <ul className="grid gap-3">
                      <li>
                        <NavigationMenuLink 
                          href="#papers"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-ijso-cool-cyan focus:bg-white/10 text-white"
                        >
                          Papers
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink 
                          href="#theory"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-ijso-cool-cyan focus:bg-white/10 text-white"
                        >
                          Theory
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink 
                          href="#experiments"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-ijso-cool-cyan focus:bg-white/10 text-white"
                        >
                          Experiments
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink 
                          href="#speeches"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-ijso-cool-cyan focus:bg-white/10 text-white"
                        >
                          Speeches
                        </NavigationMenuLink>
                      </li>
                      <li className="border-t border-white/10 pt-2 mt-2">
                        <span className="block px-3 py-1 text-sm font-semibold text-white/70">Countries</span>
                      </li>
                      <li>
                        <NavigationMenuLink 
                          href="#australia"
                          className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-ijso-cool-cyan focus:bg-white/10 text-white"
                        >
                          Australia
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink 
                          href="#brazil"
                          className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-ijso-cool-cyan focus:bg-white/10 text-white"
                        >
                          Brazil
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink 
                          href="#costa-rica"
                          className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-ijso-cool-cyan focus:bg-white/10 text-white"
                        >
                          Costa Rica
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink 
                          href="#cyprus"
                          className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-ijso-cool-cyan focus:bg-white/10 text-white"
                        >
                          Cyprus
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink 
                          href="#germany"
                          className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-ijso-cool-cyan focus:bg-white/10 text-white"
                        >
                          Germany
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink 
                          href="#hong-kong"
                          className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-ijso-cool-cyan focus:bg-white/10 text-white"
                        >
                          Hong Kong
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink 
                          href="#india"
                          className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-ijso-cool-cyan focus:bg-white/10 text-white"
                        >
                          India
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink 
                          href="#lithuania"
                          className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-ijso-cool-cyan focus:bg-white/10 text-white"
                        >
                          Lithuania
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink 
                          href="#romania"
                          className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-ijso-cool-cyan focus:bg-white/10 text-white"
                        >
                          Romania
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink 
                          href="#serbia"
                          className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-ijso-cool-cyan focus:bg-white/10 text-white"
                        >
                          Serbia
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink 
                          href="#sri-lanka"
                          className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-ijso-cool-cyan focus:bg-white/10 text-white"
                        >
                          Sri Lanka
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href={theoryUrl} 
                  className="text-white hover:text-ijso-cool-cyan transition-colors px-3 py-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Theory
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="#contact" 
                  className="text-white hover:text-ijso-cool-cyan transition-colors px-3 py-2"
                >
                  Contact Us
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        
        <div className="hidden md:block">
          <Button className="btn-primary">Join Now</Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden glass absolute w-full">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="/" className="text-white hover:text-ijso-cool-cyan transition-colors" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#about" className="text-white hover:text-ijso-cool-cyan transition-colors" onClick={() => setMobileMenuOpen(false)}>About Us</a>
            
            <div className="pl-4 border-l-2 border-ijso-cool-cyan">
              <p className="text-white mb-2 font-medium">National Junior Science Olympiad</p>
              <a href="#papers" className="block text-white hover:text-ijso-cool-cyan transition-colors py-1" onClick={() => setMobileMenuOpen(false)}>Papers</a>
              <a href="#theory" className="block text-white hover:text-ijso-cool-cyan transition-colors py-1" onClick={() => setMobileMenuOpen(false)}>Theory</a>
              <a href="#experiments" className="block text-white hover:text-ijso-cool-cyan transition-colors py-1" onClick={() => setMobileMenuOpen(false)}>Experiments</a>
              <a href="#speeches" className="block text-white hover:text-ijso-cool-cyan transition-colors py-1" onClick={() => setMobileMenuOpen(false)}>Speeches</a>
              
              <p className="text-white mt-3 mb-2 font-medium text-sm text-white/70">Countries</p>
              <a href="#australia" className="block text-white hover:text-ijso-cool-cyan transition-colors py-1" onClick={() => setMobileMenuOpen(false)}>Australia</a>
              <a href="#brazil" className="block text-white hover:text-ijso-cool-cyan transition-colors py-1" onClick={() => setMobileMenuOpen(false)}>Brazil</a>
              <a href="#costa-rica" className="block text-white hover:text-ijso-cool-cyan transition-colors py-1" onClick={() => setMobileMenuOpen(false)}>Costa Rica</a>
              <a href="#cyprus" className="block text-white hover:text-ijso-cool-cyan transition-colors py-1" onClick={() => setMobileMenuOpen(false)}>Cyprus</a>
              <a href="#germany" className="block text-white hover:text-ijso-cool-cyan transition-colors py-1" onClick={() => setMobileMenuOpen(false)}>Germany</a>
              <a href="#hong-kong" className="block text-white hover:text-ijso-cool-cyan transition-colors py-1" onClick={() => setMobileMenuOpen(false)}>Hong Kong</a>
              <a href="#india" className="block text-white hover:text-ijso-cool-cyan transition-colors py-1" onClick={() => setMobileMenuOpen(false)}>India</a>
              <a href="#lithuania" className="block text-white hover:text-ijso-cool-cyan transition-colors py-1" onClick={() => setMobileMenuOpen(false)}>Lithuania</a>
              <a href="#romania" className="block text-white hover:text-ijso-cool-cyan transition-colors py-1" onClick={() => setMobileMenuOpen(false)}>Romania</a>
              <a href="#serbia" className="block text-white hover:text-ijso-cool-cyan transition-colors py-1" onClick={() => setMobileMenuOpen(false)}>Serbia</a>
              <a href="#sri-lanka" className="block text-white hover:text-ijso-cool-cyan transition-colors py-1" onClick={() => setMobileMenuOpen(false)}>Sri Lanka</a>
            </div>
            
            <a 
              href={theoryUrl}
              className="text-white hover:text-ijso-cool-cyan transition-colors" 
              onClick={() => setMobileMenuOpen(false)}
              target="_blank"
              rel="noopener noreferrer"
            >Theory</a>
            <a href="#contact" className="text-white hover:text-ijso-cool-cyan transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact Us</a>
            <Button className="btn-primary w-full">Join Now</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
