import { create } from 'zustand';

// Define the store state type
interface MapState {
  userLocation: { lat: number; lng: number } | null;
  isLoading: boolean;
  defaultLocation: { lat: number; lng: number };
  setUserLocation: (location: { lat: number; lng: number } | null) => void;
  setIsLoading: (isLoading: boolean) => void;
}

// Create the store
export const useMapStore = create<MapState>((set) => ({
  userLocation: null,
  isLoading: true,
  defaultLocation: { lat: 37.7749, lng: -122.4194 }, // San Francisco
  setUserLocation: (location) => set({ userLocation: location }),
  setIsLoading: (isLoading) => set({ isLoading }),
}));