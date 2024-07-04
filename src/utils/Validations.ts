/**
 * Verifica se a senha possui letras, números e pelo menos 4 caracteres.
 * @param password - A senha a ser validada.
 * @returns True se a senha atende aos critérios, false caso contrário.
 */
export function isValidPassword(password: string): boolean {
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const isLongEnough = password.length >= 4;
    return hasLetters && hasNumbers && isLongEnough;
}


export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export function isValidName(name: string): boolean {
    // Verifica se o nome possui pelo menos 2 letras
    const hasAtLeastTwoLetters = /[a-zA-Z].*[a-zA-Z]/.test(name);
    return hasAtLeastTwoLetters;
}