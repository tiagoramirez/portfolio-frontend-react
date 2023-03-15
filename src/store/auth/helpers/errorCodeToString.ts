export const errorCodeToString = (code: string) => {
    switch (code) {
        case 'auth/invalid-email':
            return 'Email invalido';
        case 'auth/wrong-password':
            return 'Credenciales invalidas';
        case 'auth/weak-password':
            return 'Contraseña demasiado debil. Intenta con otra mas segura c:';
        case 'auth/email-already-in-use':
            return 'El email ya esta en uso';
        case 'auth/user-not-found':
            return 'Email no encontrado';
        case 'auth/internal-error':
            return 'Error interno';
        case 'auth/popup-closed-by-user':
            return 'Pestaña de Google cerrada';

        default:
            return 'Error desconocido. Codigo de referencia: ' + code;
    }
};