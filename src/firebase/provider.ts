import { FirebaseError } from 'firebase/app';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

export interface ProviderResponse {
    email: string;
    errorCode: string;
    ok: boolean;
    uid: string;
}

export const signInWithGoogle = async (): Promise<ProviderResponse> => {
    try {
        const { user } = await signInWithPopup(FirebaseAuth, googleProvider);
        const { email, uid } = user;
        return { email: email as string, errorCode: '', ok: true, uid: uid };
    }
    catch (err: unknown) {
        console.error('Error de Firebase: ');
        console.error(err);
        const { code } = err as FirebaseError;
        return { email: '', errorCode: code, ok: false, uid: '' };
    }
};

export const registerUserWithEmailPassword = async (email: string, password: string): Promise<ProviderResponse> => {
    try {
        const { user } = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid } = user;
        return { ok: true, email: email, uid, errorCode: '' };
    }
    catch (err: unknown) {
        console.error('Error de Firebase: ');
        console.error(err);
        const { code } = err as FirebaseError;
        return { ok: false, email: '', uid: '', errorCode: code, };
    }
};

export const loginUserWithEmailPassword = async (email: string, password: string): Promise<ProviderResponse> => {
    try {
        const { user } = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid } = user;
        return { ok: true, email: email, uid: uid, errorCode: '' };
    }
    catch (err: unknown) {
        console.error('Error de Firebase: ');
        console.error(err);
        const { code } = err as FirebaseError;
        return { ok: false, email: '', uid: '', errorCode: code };
    }
};

export const logoutFirebase = async (): Promise<void> => {
    return await FirebaseAuth.signOut();
};
