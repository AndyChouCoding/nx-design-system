import React from 'react';
import MuiCard, { CardProps as MuiCardProps } from '@mui/material/Card';
import MuiCardContent, { CardContentProps } from '@mui/material/CardContent';
import MuiCardHeader, { CardHeaderProps } from '@mui/material/CardHeader';
import MuiCardActions, { CardActionsProps } from '@mui/material/CardActions';

export type CardProps = MuiCardProps;

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (props, ref) => {
    return <MuiCard ref={ref} {...props} />;
  }
);

Card.displayName = 'Card';

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  (props, ref) => <MuiCardContent ref={ref} {...props} />
);
CardContent.displayName = 'CardContent';

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  (props, ref) => <MuiCardHeader ref={ref} {...props} />
);
CardHeader.displayName = 'CardHeader';

export const CardActions = React.forwardRef<HTMLDivElement, CardActionsProps>(
  (props, ref) => <MuiCardActions ref={ref} {...props} />
);
CardActions.displayName = 'CardActions';

export default Card;
