import { useState, useEffect } from 'react';
import { Heart, Sparkles } from 'lucide-react';

interface CountdownTimerProps {
  onTimerEnd: () => void;
}

const CountdownTimer = ({ onTimerEnd }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const targetDate = new Date('2025-09-25T00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setIsFinished(true);
        clearInterval(interval);
        setTimeout(onTimerEnd, 2000);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [onTimerEnd]);

  if (isFinished) {
    return (
      <div className="min-h-screen bg-romantic flex items-center justify-center p-4">
        <div className="text-center animate-bounce-in">
          <div className="animate-heart-beat mb-8">
            <Heart className="w-20 h-20 mx-auto text-accent fill-current" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Time's Up! 💕
          </h1>
          <p className="text-xl text-muted-foreground animate-pulse">
            Get ready for something special...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-suspense flex items-center justify-center p-4 relative overflow-hidden">
      {/* Floating sparkles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <Sparkles
            key={i}
            className={`absolute text-accent/30 animate-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              fontSize: `${Math.random() * 20 + 10}px`,
            }}
          />
        ))}
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-3xl md:text-6xl font-bold text-foreground mb-4 animate-pulse-glow">
            Something Special Coming In...
          </h1>
          
          <div className="text-xl md:text-2xl text-muted-foreground mb-12 animate-heart-beat">
            ✨ Prepare yourself for an amazing surprise ✨
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-8">
            <div className="bg-card/20 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-romantic animate-bounce-in">
              <div className="text-2xl md:text-4xl font-bold text-accent mb-2">
                {timeLeft.days.toString().padStart(2, '0')}
              </div>
              <div className="text-sm md:text-base text-muted-foreground">Days</div>
            </div>
            <div className="bg-card/20 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-romantic animate-bounce-in" style={{animationDelay: '0.1s'}}>
              <div className="text-2xl md:text-4xl font-bold text-accent mb-2">
                {timeLeft.hours.toString().padStart(2, '0')}
              </div>
              <div className="text-sm md:text-base text-muted-foreground">Hours</div>
            </div>
            <div className="bg-card/20 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-romantic animate-bounce-in" style={{animationDelay: '0.2s'}}>
              <div className="text-2xl md:text-4xl font-bold text-accent mb-2">
                {timeLeft.minutes.toString().padStart(2, '0')}
              </div>
              <div className="text-sm md:text-base text-muted-foreground">Minutes</div>
            </div>
            <div className="bg-card/20 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-romantic animate-bounce-in" style={{animationDelay: '0.3s'}}>
              <div className="text-2xl md:text-4xl font-bold text-accent mb-2">
                {timeLeft.seconds.toString().padStart(2, '0')}
              </div>
              <div className="text-sm md:text-base text-muted-foreground">Seconds</div>
            </div>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground animate-float">
            The countdown to our special moment continues... 💖
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;