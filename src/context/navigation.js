import { createContext } from "react";

const NavigationContext = createContext();

const NavigationCtxProvider = ({ children }) => {
	return (
		<NavigationContext.Provider value={{} }>
			{children}
		</NavigationContext.Provider>
	);
};
export {NavigationCtxProvider}
export default NavigationContext;
