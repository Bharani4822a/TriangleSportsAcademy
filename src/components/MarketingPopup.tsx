import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Bell } from "lucide-react";

const messages = [
  { text: "Need to book a court? Call now!", link: "/booking" },
  { text: "Need coaching details? Contact us now!", link: "/contact" }
];

export function MarketingPopup() {
  const [visible, setVisible] = useState(false);
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    // Start by waiting 60 seconds before first show
    const intervalId = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % messages.length);
      setVisible(true);

      // Hide after 10 seconds
      setTimeout(() => {
        setVisible(false);
      }, 10000);
    }, 30000); // 30 seconds

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  if (!visible) return null;

  const currentMsg = messages[msgIndex];

  return (
    <div className="fixed bottom-6 left-5 z-50 animate-in slide-in-from-bottom-5 fade-in duration-300">
      <Link to={currentMsg.link} className="block bg-background/95 backdrop-blur-md border border-border rounded-xl shadow-glow p-4 pr-10 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="flex items-center gap-3 relative z-10">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-highlight flex items-center justify-center shrink-0 relative">
            <span className="animate-ping absolute h-full w-full rounded-full bg-primary opacity-20"></span>
            <Bell className="h-4 w-4 text-primary-foreground" />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-highlight font-semibold">Notification</div>
            <div className="text-sm font-medium text-foreground">{currentMsg.text}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}
