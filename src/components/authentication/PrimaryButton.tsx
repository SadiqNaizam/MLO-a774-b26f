import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface PrimaryButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isLoading?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  onClick,
  isLoading = false,
  className,
  type = "submit",
  children = "Log in"
}) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={isLoading}
      className={cn("w-full", className)} 
      variant="default" 
    >
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </Button>
  );
};

export default PrimaryButton;
