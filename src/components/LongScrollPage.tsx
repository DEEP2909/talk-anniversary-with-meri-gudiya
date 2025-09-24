import { useState, useEffect } from 'react';
import { Gift, ArrowDown, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LongScrollPageProps {
  onGiftClick: () => void;
}

const LongScrollPage = ({ onGiftClick }: LongScrollPageProps) => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollPercent(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const trollMessages = [
    "Keep scrolling... there's something special waiting! 😏",
    "Are you getting tired yet? The surprise is worth it! 💪",
    "Still scrolling? You're dedicated! 🚀",
    "Hmm, you're really committed to this... 🤔",
    "The gift is somewhere here... keep looking! 🎁",
    "Your finger must be getting a workout! 💪",
    "Don't give up now, you're doing great! 👏",
    "This is like a treasure hunt, but with more scrolling! 🗺️",
    "You know there's a scroll bar, right? 😅",
    "Professional scroller level unlocked! 🏆",
    "Almost there... or are you? 🤷‍♀️",
    "Plot twist: The real treasure was the scrolling we did along the way! ✨"
  ];

  const postButtonMessages = [
    "Wait, you found it! But there's more below... 😈",
    "You thought that was it? Keep scrolling! 📜",
    "The button was just the beginning! 🎭",
    "You've gone too far! Maybe go back up? ⬆️",
    "Seriously, you can stop scrolling now... 🛑",
    "You're really testing the limits here! 🚧",
    "This is getting ridiculous... 🙄",
    "You've scrolled more than necessary! Go back! ↩️",
    "Achievement unlocked: Over-Scroller! 🏅",
    "There's literally nothing more down here! 🕳️",
    "Turn back now, brave scroller! ⚠️",
    "You've reached the point of no return! 🌀",
    "This is your final warning to go back! ⛔",
    "Congratulations, you've found the end of the internet! 🌐"
  ];

  return (
    <div className="min-h-screen bg-romantic">
      {/* Progress indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-muted/20 z-50">
        <div 
          className="h-full bg-accent transition-all duration-300"
          style={{ width: `${scrollPercent}%` }}
        />
      </div>

      {/* Initial section */}
      <div className="min-h-screen flex items-center justify-center text-center p-4">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 animate-pulse-glow">
            Welcome to Your Special Journey! 💖
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Time to find your gift! Keep scrolling down... 
          </p>
          <ArrowDown className="w-12 h-12 mx-auto text-accent animate-bounce" />
        </div>
      </div>

      {/* Troll sections before the gift button */}
      {trollMessages.map((message, index) => (
        <div key={index} className="min-h-screen flex items-center justify-center p-4">
          <div className="max-w-2xl text-center animate-fade-in">
            <p className="text-2xl md:text-3xl text-foreground mb-8">
              {message}
            </p>
            <ArrowDown className="w-10 h-10 mx-auto text-accent animate-bounce" />
            
            {/* Add some fake gift boxes to troll */}
            {index % 3 === 0 && (
              <div className="mt-8 p-6 bg-card/20 rounded-xl backdrop-blur-sm">
                <Gift className="w-16 h-16 mx-auto text-muted-foreground/30 mb-4" />
                <p className="text-muted-foreground">
                  Just kidding! This isn't the real gift 😄
                </p>
              </div>
            )}
          </div>
        </div>
      ))}

      {/* The actual gift button - positioned randomly */}
      <div className="min-h-screen flex items-center justify-center p-4" style={{ marginLeft: Math.random() * 200 - 100 }}>
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 animate-pulse-glow">
            🎉 You found it! 🎉
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Here's your special gift button! Click it to reveal your surprise 💝
          </p>
          
          <Button
            onClick={onGiftClick}
            className="bg-gift hover:bg-gift/80 text-primary-foreground px-6 py-3 text-lg font-semibold rounded-full shadow-gift animate-pulse-glow transition-all duration-300 hover:scale-110"
          >
            <Gift className="w-6 h-6 mr-2" />
            Open Your Gift 🎁
          </Button>
          
          <p className="text-sm text-muted-foreground mt-4">
            But wait... there might be more below 😏
          </p>
          <ArrowDown className="w-8 h-8 mx-auto text-accent/50 animate-bounce mt-4" />
        </div>
      </div>

      {/* Post-button troll sections */}
      {postButtonMessages.map((message, index) => (
        <div key={`post-${index}`} className="min-h-screen flex items-center justify-center p-4">
          <div className="max-w-2xl text-center animate-fade-in">
            <p className="text-2xl md:text-3xl text-foreground mb-8">
              {message}
            </p>
            
            {index < postButtonMessages.length - 3 ? (
              <ArrowDown className="w-10 h-10 mx-auto text-accent/70 animate-bounce" />
            ) : (
              <ArrowUp className="w-10 h-10 mx-auto text-accent animate-bounce" />
            )}
            
            {/* Add more variety to troll sections */}
            {index % 4 === 0 && (
              <div className="mt-8 p-6 bg-card/10 rounded-xl backdrop-blur-sm">
                <p className="text-lg text-muted-foreground italic">
                  "The journey of a thousand miles begins with a single scroll..." - Ancient Proverb (probably) 📜
                </p>
              </div>
            )}
            
            {index === postButtonMessages.length - 1 && (
              <div className="mt-8 p-8 bg-card/20 rounded-xl backdrop-blur-sm border-2 border-accent/30">
                <h3 className="text-2xl font-bold text-accent mb-4">🏁 The End! 🏁</h3>
                <p className="text-lg text-foreground">
                  You've officially reached the end of this endless scroll! 
                  Now go back and click that gift button if you haven't already! 💖
                </p>
              </div>
            )}
          </div>
        </div>
      ))}
      
      {/* Final spacer */}
      <div className="h-96"></div>
    </div>
  );
};

export default LongScrollPage;