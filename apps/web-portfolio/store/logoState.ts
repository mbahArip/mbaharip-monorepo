import create from 'zustand';

type LogoState = {
	isLogoLoaded: boolean;
	setIsLogoLoaded: (isLogoLoaded: boolean) => void;
};

const useLogoState = create<LogoState>((set) => ({
	isLogoLoaded: false,
	setIsLogoLoaded: (isLogoLoaded: boolean) => set({ isLogoLoaded }),
}));

export default useLogoState;
