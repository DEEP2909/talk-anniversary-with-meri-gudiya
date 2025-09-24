import { useState } from 'react';
import CountdownTimer from '@/components/CountdownTimer';
import LongScrollPage from '@/components/LongScrollPage';
import PhotoGallery from '@/components/PhotoGallery';

type PageState = 'countdown' | 'scroll' | 'gallery';

const Index = () => {
  const [currentPage, setCurrentPage] = useState<PageState>('countdown');

  const handleTimerEnd = () => {
    setCurrentPage('scroll');
  };

  const handleGiftClick = () => {
    setCurrentPage('gallery');
  };

  if (currentPage === 'countdown') {
    return <CountdownTimer onTimerEnd={handleTimerEnd} />;
  }

  if (currentPage === 'scroll') {
    return <LongScrollPage onGiftClick={handleGiftClick} />;
  }

  return <PhotoGallery />;
};

export default Index;
