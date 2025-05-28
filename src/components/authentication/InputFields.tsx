import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

interface InputFieldsProps {
  username?: string;
  onUsernameChange: (value: string) => void;
  password?: string;
  onPasswordChange: (value: string) => void;
  className?: string;
}

const InputFields: React.FC<InputFieldsProps> = ({
  username = '',
  onUsernameChange,
  password = '',
  onPasswordChange,
  className,
}) => {
  return (
    <div className={cn("space-y-4", className)}> 
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="username">Username</Label>
        <Input
          id="username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => onUsernameChange(e.target.value)}
          autoComplete="username"
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => onPasswordChange(e.target.value)}
          autoComplete="current-password"
        />
      </div>
    </div>
  );
};

export default InputFields;
