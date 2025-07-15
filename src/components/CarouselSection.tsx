import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styles from "../styles/App.module.css";
import { useRef, useEffect } from "react";

type CarouselSectionProps = {
  title: string;
  items: string[];
};

export default function CarouselSection({ title, items }: CarouselSectionProps) {
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Condicional para ativar loop e autoplay
  const enableAutoPlay = items.length > 3;

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: enableAutoPlay,
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 1, spacing: 10 },
      },
      "(min-width: 769px) and (max-width: 1200px)": {
        slides: { perView: 2, spacing: 10 },
      },
      "(min-width: 1201px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
    slides: {
      perView: 3,
      spacing: 10,
    },
  });

  useEffect(() => {
    const slider = instanceRef.current;
    if (!slider) return;

    // Se autoplay não estiver habilitado, não cria timer
    if (!enableAutoPlay) return;

    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      slider.next();
    }, 2000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [instanceRef.current, enableAutoPlay]); // Reexecuta se mudar o autoplay

  return (
    <div className={styles.section}>
      <h2>{title}</h2>
      <div ref={sliderRef} className="keen-slider">
        {items.map((item, index) => (
          <div key={index} className="keen-slider__slide">
            <div className={styles.card}>{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
