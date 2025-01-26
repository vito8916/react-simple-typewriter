declare module "react-simple-typewriter-vb" {
    import * as React from "react";

    export interface TypewriterProps {
        options: {
            strings: string[];
            speed?: number; // Default: 50
            pause?: number; // Default: 1000
        };
    }

    export const TypeWriter: React.FC<TypewriterProps>;
}
