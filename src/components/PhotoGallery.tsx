import { useState } from 'react';
import { Heart, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const photos = [
    {
      src: "/lovable-uploads/249fe89c-daec-48aa-8c57-c27b8a41e782.png",
      caption: "Beautiful moments together 💕"
    },
    {
      src: "/lovable-uploads/8a594204-42e3-4740-a502-5acf1a8fb8ca.png",
      caption: "Traditional elegance ✨"
    },
    {
      src: "/lovable-uploads/7b895a4a-c8c7-448b-8b11-60644779100e.png",
      caption: "Joyful memories 😊"
    },
    {
      src: "/lovable-uploads/aae3d79d-96b9-40ec-99a4-2539a9acfa88.png",
      caption: "By the water's edge 🌊"
    },
    {
      src: "/lovable-uploads/862a9e7c-416d-4f2d-9e5e-c8162718ec30.png",
      caption: "Sacred places, special moments 🏛️"
    },
    {
      src: "/lovable-uploads/f89ad275-7aa0-4615-9f48-99f35383d029.png",
      caption: "Adorned with love 👑"
    },
    {
      src: "/lovable-uploads/6f7d8f26-f756-4a40-a35c-7471f85f3191.png",
      caption: "Elegance defined ✨"
    },
    {
      src: "/lovable-uploads/1020d0a7-d7bb-4209-bbf6-e15a6014014d.png",
      caption: "Adventures together 🚶‍♀️🚶‍♂️"
    },
    {
      src: "/lovable-uploads/4cebcd41-6bdf-43b2-96ff-1ae7b6f07eb0.png",
      caption: "Perfect harmony 💑"
    },
    {
      src: "/lovable-uploads/0ebf9230-2844-43f6-a76b-6f2aa6417c7a.png",
      caption: "Candid happiness 📸"
    }
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % photos.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? photos.length - 1 : selectedImage - 1);
    }
  };

  return (
    <div className="min-h-screen bg-celebration">
      {/* Header Section */}
      <div className="text-center py-16 px-4">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 animate-heart-beat">
            🎉 Congratulations! 🎉
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            Completing 2 Years of Talking Milestone
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Thanks for Tolerating me for two years, but still a whole life is remaining 💕✨
          </p>
          <div className="flex justify-center space-x-4 text-4xl animate-bounce">
            💖 🌟 💑 🥳 💝
          </div>
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="container mx-auto px-4 pb-16">
        <h3 className="text-3xl font-bold text-center text-foreground mb-12 animate-fade-in">
          Our Beautiful Journey Together 📸
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div 
              key={index}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openModal(index)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-romantic bg-card/20 backdrop-blur-sm border border-accent/20 transition-all duration-500 hover:scale-105 hover:shadow-glow">
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-64 md:h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-foreground transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-medium">{photo.caption}</p>
                </div>
                <Heart className="absolute top-4 right-4 w-6 h-6 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
              </div>
            </div>
          ))}
        </div>

        {/* Final Message */}
        <div className="text-center mt-16 p-8 bg-card/20 backdrop-blur-sm rounded-xl border border-accent/30 animate-fade-in">
          <h4 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Here's to Many More Years Together! 🥂
          </h4>
          <p className="text-lg text-muted-foreground">
            Every moment with you is a treasure. Looking forward to creating countless more memories! 💕
          </p>
          <div className="flex justify-center space-x-2 text-3xl mt-6 animate-heart-beat">
            💖 🌹 💍 👫 🌟 💑 💐 💝
          </div>
        </div>
      </div>

      {/* Modal for full-size images */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-primary/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <img
              src={photos[selectedImage].src}
              alt={photos[selectedImage].caption}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-glow"
            />
            
            <Button
              variant="ghost"
              size="icon"
              onClick={closeModal}
              className="absolute -top-12 right-0 text-foreground hover:text-accent bg-card/20 hover:bg-card/40"
            >
              <X className="w-6 h-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground hover:text-accent bg-card/20 hover:bg-card/40"
            >
              <ChevronLeft className="w-8 h-8" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground hover:text-accent bg-card/20 hover:bg-card/40"
            >
              <ChevronRight className="w-8 h-8" />
            </Button>

            <div className="absolute -bottom-16 left-0 right-0 text-center">
              <p className="text-foreground text-lg font-medium">
                {photos[selectedImage].caption}
              </p>
              <p className="text-muted-foreground text-sm mt-2">
                {selectedImage + 1} of {photos.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;