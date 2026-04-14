import { useState } from 'react';

import LoginStyles from './Login.module.css';
import { useAuthContext } from '../../shared/contexts/AuthContext';

type IErrors = {
  email?: string;
  password?: string;
}


export const Login = () => {

  const { login } = useAuthContext()

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<IErrors>({});


  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: IErrors = {};
    let isValid = true;

    if (!email.trim()) {
      newErrors.email = 'O campo e-mail é um campo obrigatório';
      isValid = false;
    } else if (!validateEmail(email)) {
      newErrors.email = 'Digite um e-mail válido';
      isValid = false;
    }

    if (!password.trim()) {
      newErrors.password = 'O campo senha é um campo obrigatório';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleLogin = () => {
    if (!validateForm()) {
      return;
    }
    login(email, password);
  };


  return (
    <div className={LoginStyles.PageContainer}>
      <div className={LoginStyles.PageContent}>
        <h1>
          Login
        </h1>

        <div className={LoginStyles.FormContainer}>
          <div className={LoginStyles.FieldGroup}>
            <b>Email</b>
            <input
              value={email}
              className={LoginStyles.Input}
              onChange={e => setEmail(e.target.value)}
            />
            {errors.email && (
              <span className={LoginStyles.ErrorMessage}>{errors.email}</span>
            )}
          </div>

          <div className={LoginStyles.FieldGroup}>
            <b>Senha</b>
            <input
              type='password'
              value={password}
              className={LoginStyles.Input}
              onChange={e => setPassword(e.target.value)}
            />
            {errors.password && (
              <span className={LoginStyles.ErrorMessage}>{errors.password}</span>
            )}
          </div>
        </div>

        <button className={LoginStyles.Button} onClick={handleLogin}>
          Entrar
        </button>
      </div>
    </div>
  );
};
