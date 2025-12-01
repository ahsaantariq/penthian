/* eslint-disable @next/next/no-img-element */
'use client';

import * as React from 'react';
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselDots,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from '../ui/carousel';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

interface ImageSliderProps {
    images: string[];
    className?: string;
    /** When true, clicking an image opens a full-screen lightbox */
    enableZoom?: boolean;
}

export default function ImageSlider({ 
    images, 
    className,
    enableZoom = false 
}: ImageSliderProps) {
    const carouselRef = React.useRef<HTMLDivElement>(null);
    const [cursorStyle, setCursorStyle] = React.useState('grab');

    const [carouselApi, setCarouselApi] = React.useState<CarouselApi | null>(null);
    const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

    // Lightbox state
    const [lightboxOpen, setLightboxOpen] = React.useState(false);
    const [lightboxIndex, setLightboxIndex] = React.useState(0);

    const openLightbox = (index: number) => {
        if (!enableZoom) return;
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

    // Cursor grab/grabbing
    React.useEffect(() => {
        const embla = carouselRef.current;
        if (!embla) return;

        const mouseDown = () => setCursorStyle('grabbing');
        const mouseUpLeave = () => setCursorStyle('grab');

        embla.addEventListener('mousedown', mouseDown);
        embla.addEventListener('mouseup', mouseUpLeave);
        embla.addEventListener('mouseleave', mouseUpLeave);
        embla.addEventListener('touchstart', mouseDown);
        embla.addEventListener('touchend', mouseUpLeave);

        return () => {
            embla.removeEventListener('mousedown', mouseDown);
            embla.removeEventListener('mouseup', mouseUpLeave);
            embla.removeEventListener('mouseleave', mouseUpLeave);
            embla.removeEventListener('touchstart', mouseDown);
            embla.removeEventListener('touchend', mouseUpLeave);
        };
    }, []);

    // Auto-scroll every 3s + pause on hover
    React.useEffect(() => {
        if (!carouselApi) return;

        const startAutoScroll = () => {
            if (intervalRef.current) clearInterval(intervalRef.current);

            intervalRef.current = setInterval(() => {
                const selected = carouselApi.selectedScrollSnap();
                const count = carouselApi.scrollSnapList().length;

                if (selected === count - 1) {
                    carouselApi.scrollTo(0);
                } else {
                    carouselApi.scrollNext();
                }
            }, 3000);
        };

        startAutoScroll();

        const container = carouselRef.current;
        const pause = () => intervalRef.current && clearInterval(intervalRef.current);
        const resume = () => startAutoScroll();

        container?.addEventListener('mouseenter', pause);
        container?.addEventListener('mouseleave', resume);

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
            container?.removeEventListener('mouseenter', pause);
            container?.removeEventListener('mouseleave', resume);
        };
    }, [carouselApi]);

    return (
        <>
            <Carousel
                ref={carouselRef}
                setApi={setCarouselApi}
                className={cn(
                    `relative w-full max-w-full shadow-card rounded-3xl bg-transparent overflow-hidden`,
                    cursorStyle,
                    enableZoom && 'cursor-zoom-in',
                    className
                )}
            >
                <CarouselContent className='h-full'>
                    {images.length > 0 ? (
                        images.map((image, index) => (
                            <CarouselItem key={index} className="w-full border-none">
                                <div
                                    className="relative flex w-full justify-center items-center rounded-3xl h-80 lg:h-96 3xl:h-[550px] overflow-hidden"
                                    onClick={() => openLightbox(index)}
                                    style={{ cursor: enableZoom ? 'zoom-in' : 'grab' }}
                                >
                                    <Image
                                        src={image}
                                        alt={`Slide ${index}`}
                                        fill
                                        className="object-cover rounded-3xl"
                                        onError={(e) => {
                                            e.currentTarget.src = '/images/banner_placeholder.png';
                                        }}
                                    />
                                </div>
                            </CarouselItem>
                        ))
                    ) : (
                        <p>No images available</p>
                    )}
                </CarouselContent>
                <CarouselDots />
                <CarouselNext />
                <CarouselPrevious />
            </Carousel>

            {/* Full-screen Lightbox */}
            <Dialog.Root open={lightboxOpen} onOpenChange={setLightboxOpen}>
                <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black/95 z-[9998]" />
                    <Dialog.Content className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                        <Dialog.Close className="absolute top-6 right-6 text-white hover:text-gray-300 transition">
                            <X size={40} strokeWidth={2} />
                        </Dialog.Close>

                        <div className="relative max-w-7xl max-h-full">
                            <Image
                                src={images[lightboxIndex]}
                                alt="Full preview"
                                width={1400}
                                height={900}
                                className="max-w-full max-h-[90vh] object-contain"
                            />
                        </div>

                        {images.length > 1 && (
                            <>
                                <button
                                    onClick={() => setLightboxIndex((i) => (i - 1 + images.length) % images.length)}
                                    className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-6xl hover:text-gray-300"
                                >
                                    ‹
                                </button>
                                <button
                                    onClick={() => setLightboxIndex((i) => (i + 1) % images.length)}
                                    className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-6xl hover:text-gray-300"
                                >
                                    ›
                                </button>
                            </>
                        )}
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </>
    );
}
