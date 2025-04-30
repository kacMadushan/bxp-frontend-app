import {
    createContext,
    useState,
    useEffect,
    useContext,
    useMemo,
    type ReactNode
} from 'react';
import { Credentials, User } from '../types/user.interface';
import { user_data } from '../utils/constants';

interface IAuthContext {
    user: User | null;
    isAuthenticated: boolean;
    userLogin: (credentials: Credentials) => Promise<void>;
    userLogout: () => void;
}

const mock_user: User = {
    id: 1,
    email: 'admin@domain.com',
    name: 'Admin User'
};

const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const userLogin = async (credentials: Credentials): Promise<void> => {
        return new Promise((resolve, reject) => {
            if (credentials.email === user_data.email && credentials.password === user_data.password) {
                setUser(mock_user);
                setIsAuthenticated(true);
                localStorage.setItem('user', JSON.stringify(mock_user));
                resolve();
            } else {
                reject(new Error('Email Or Password Invalid'))
            }
        })
    };

    const userLogout = () => {
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem('user');
    };


    useEffect(() => {
        const saveToUserLocalStorage = localStorage.getItem('user');
        if (saveToUserLocalStorage) {
            setUser(JSON.parse(saveToUserLocalStorage));
            setIsAuthenticated(true);
        }
    }, []);

    const value = useMemo(() =>
    (
        { user, isAuthenticated, userLogin, userLogout }
    ), [user, isAuthenticated]);

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuthContext must be used withing an AuthContext')
    }
    return context;
};