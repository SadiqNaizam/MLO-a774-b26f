import React, { useState, useCallback } from 'react';
import { cn } from '@/lib/utils';
import Heading from './Heading';
import InputFields from './InputFields';
import PrimaryButton from './PrimaryButton';
import SecondaryLinks from './SecondaryLinks';
import { AlertTriangle } from 'lucide-react';

interface AuthenticationFormProps {
  className?: string;
}

const AuthenticationForm: React.FC<AuthenticationFormProps> = ({ className }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleUsernameChange = useCallback((value: string) => {
    setUsername(value);
    if (error) setError(null); // Clear error on input change
  }, [error]);

  const handlePasswordChange = useCallback((value: string) => {
    setPassword(value);
    if (error) setError(null); // Clear error on input change
  }, [error]);

  const handleSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (username === 'testuser' && password === 'password123') {
      alert('Login successful!'); // Placeholder for actual success action
      // TODO: Add actual login logic (e.g., redirect, set auth context)
    } else {
      setError('Invalid username or password. Please try again.');
    }
    setIsLoading(false);
  }, [username, password]);

  const handleSignUpClick = useCallback(() => {
    alert('Navigate to Sign Up page'); // Placeholder for actual navigation
    // TODO: Add navigation logic (e.g. using react-router-dom)
  }, []);

  return (
    <div
      className={cn(
        "w-[400px] max-w-full bg-card text-card-foreground p-6 rounded-md shadow-md flex flex-col",
        className
      )}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <Heading />
        
        <InputFields
          username={username}
          onUsernameChange={handleUsernameChange}
          password={password}
          onPasswordChange={handlePasswordChange}
        />

        {error && (
          <div className="flex items-center space-x-2 rounded-md border border-destructive/50 bg-destructive/10 p-3 text-sm text-destructive">
            <AlertTriangle className="h-4 w-4 flex-shrink-0" />
            <p>{error}</p>
          </div>
        )}
        
        <PrimaryButton type="submit" isLoading={isLoading}>
          Log in
        </PrimaryButton>
        <SecondaryLinks onSignUpClick={handleSignUpClick} />
      </form>
    </div>
  );
};

export default AuthenticationForm;
