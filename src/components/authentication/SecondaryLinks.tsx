import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface SecondaryLinksProps {
  onSignUpClick?: () => void;
  className?: string;
}

const SecondaryLinks: React.FC<SecondaryLinksProps> = ({ onSignUpClick, className }) => {
  const handleSignUp = onSignUpClick || (() => console.log('Sign up clicked: Please provide an onSignUpClick handler for navigation.'));

  return (
    <div className={cn("text-center text-sm text-muted-foreground", className)}>
      or,{' '}
      <Button
        variant="link"
        className="p-0 h-auto font-medium"
        onClick={handleSignUp}
      >
        sign up
      </Button>
    </div>
  );
};

export default SecondaryLinks;
