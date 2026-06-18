//Valida que el nombre este correcto.
export function validateName(name) {
  if (!name.trim()) {
    return "El nombre es obligatorio";
  }

  return null;
}

export function validateEmail(email) {
  if (!email.trim()) {
    return "El correo es obligatorio";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return "Correo inválido";
  }

  return null;
}

export function validatePassword(password) {
  if (!password.trim()) {
    return "La contraseña es obligatoria";
  }

  if (password.length < 6) {
    return "La contraseña debe tener mínimo 6 caracteres";
  }

  return null;
}