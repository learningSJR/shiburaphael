import { FloatingNav } from "@/components/ui/floating-navbar";
import {
  IconHome,
  IconMessage,
  IconUser,
  IconBriefcase,
} from "@tabler/icons-react";

export function FloatingNavAce() {
  const navItems = [
    { name: "Home", link: "/", icon: <IconHome className="w-4 h-4" /> },
    { name: "About", link: "/about", icon: <IconUser className="w-4 h-4" /> },
    {
      name: "Projects",
      link: "/projects",
      icon: <IconBriefcase className="w-4 h-4" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <IconMessage className="w-4 h-4" />,
    },
  ];

  return (
    <div className="inset-x-0 z-50 flex justify-center md:fixed top-6">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
