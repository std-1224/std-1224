export interface WorkItem {
    title: string;
    description: string;
    url: string;
    website?: string;
}

export interface CardProps {
    url: string;
    title?: string;
    description?: string;
    position: [number, number, number];
    rotation: [number, number, number];
    website?: string;
}

export interface RigProps {
    rotation?: [number, number, number];
    children: React.ReactNode;
}

export interface CarouselProps {
    radius?: number;
    count?: number;
}

export interface BannerProps {
    position?: [number, number, number];
}
