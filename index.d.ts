declare module "react-simple-typewriter-vb" {
    import * as React from "react";

    export interface TypewriterProps {
        options: {
            strings: string[];
            speed?: number; // Default: 50
            deleteSpeed?: number; // Default: 30
            pause?: number; // Default: 1000
            loop?: boolean; // Default: true
        };
    }

    export const TypeWriter: React.FC<TypewriterProps>;
}
