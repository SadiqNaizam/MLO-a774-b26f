import React from 'react';
import AuthenticationForm from '@/components/authentication/AuthenticationForm';

// This component corresponds to the "LoginPage" in the component hierarchy.
// It implements the "AuthLayout" template's concept by centering the AuthenticationForm.
const LoginPage: React.FC = () => {
  return (
    // Overall page layout as per "AuthLayout" concept and "Layout Requirements":
    // - Layout Type: Flex container for centering content.
    // - Styling Definition: "flex justify-center items-center h-screen"
    // - Background: Applied from theme variables for consistency.
    // - Text Color: Default text color from theme variables.
    <main className="flex justify-center items-center h-screen bg-background text-foreground">
      {/*
        The AuthenticationForm organism is rendered here.
        It encapsulates its own card styling and internal form layout based on project requirements:
        - Card Sizing: "w-[400px] max-w-full" (as per overall.sizing.card)
        - Card Style: "flex flex-col bg-card text-card-foreground p-6 rounded-md shadow-md" (as per card.layout, using bg-card which maps to --surface)
        - Internal Form Spacing: "space-y-4" (as per form.layout)
      */}
      <AuthenticationForm />
    </main>
  );
};

export default LoginPage;
