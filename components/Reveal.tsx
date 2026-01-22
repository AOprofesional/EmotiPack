import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
    children: React.ReactNode;
    animation?: 'fade-up' | 'pop-in';
    delay?: number;
    className?: string;
    threshold?: number;
}

const Reveal: React.FC<RevealProps> = ({
    children,
    animation = 'fade-up',
    delay = 0,
    className = "",
    threshold = 0.1
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [threshold]);

    const animationClass = animation === 'pop-in' ? 'animate-pop-in' : 'animate-fade-up';
    const delayStyle = delay ? { transitionDelay: `${delay}ms` } : {};

    return (
        <div
            ref={ref}
            className={`animate-on-scroll ${animationClass} ${isVisible ? 'is-visible' : ''} ${className}`}
            style={delayStyle}
        >
            {children}
        </div>
    );
};

export default Reveal;
