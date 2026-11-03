"use client"
import Carousel from 'react-bootstrap/Carousel';

interface Slide {
    title: string;
    subtitle: string;
    imageUrl: string;
}

const HeroSection = () => {
    const slides: Slide[] = [
        {
            title: "The Skin Atelier",
            subtitle: "Where science meets beauty, and every skin tells its own story.",
            imageUrl: "/hero-section/face_concern.jpeg",
        },
        {
            title: "Know Yourself",
            subtitle: "Discover your uniqueness, embrace your nature, and understand what makes you beautifully you.",
            imageUrl: "/hero-section/body_concern.jpeg",
        },
        {
            title: "Care For Yourself",
            subtitle: "A gentle reminder that caring for yourself is the most beautiful form of self-love.",
            imageUrl: "/hero-section/hair_scalp.jpeg",
        }
    ]

    return (
        <Carousel fade interval={ 4000 } data-bs-theme="dark" className="hero-carousel">
            { slides.map((slide, index) => (
                <Carousel.Item key={ index }>
                    <div
                        style={{
                            backgroundImage:`url(${ slide.imageUrl})`,
                            backgroundSize:"cover",
                            backgroundPosition:"center",
                            height:"60vh",
                        }}>
                    </div>
                    <Carousel.Caption className="hero-caption">
                        <h1 className="display-4 fw-bold">{ slide.title }</h1>
                        <p className="lead">{ slide.subtitle }</p>
                    </Carousel.Caption>
                </Carousel.Item>
            )
            )}
        </Carousel>
    )
}

export default HeroSection;