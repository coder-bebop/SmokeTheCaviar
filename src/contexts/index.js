import { ThemeContext, ThemeContextProvider } from './theme';
import { UserContext, UserContextProvider } from './user';

const GlobalContextProvider = ({children}) => {
    return <ThemeContextProvider><UserContextProvider>{children}</UserContextProvider></ThemeContextProvider>
};

export {GlobalContextProvider, ThemeContext, UserContext};