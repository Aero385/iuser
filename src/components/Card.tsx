import React, {PropsWithChildren, FC, useState} from 'react';

export enum CardVariant {
    outlined= 'outlined',
    primary= 'primary',
}

interface CardProps extends PropsWithChildren{
    width?: string;
    height?: string;
    variant: CardVariant;
}

const Card: FC<CardProps> = 
    ({
        width,
        height,
        variant,
        children,
    }) => {
        const [state, setState] = useState(0)
    return (
        <div style={{
            width, height,
            border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
            background: variant === CardVariant.primary ? 'red' : ''
        }}
        >
            {children}
        </div>
    );
}

export default Card;
