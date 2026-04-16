import * as _mui_material from '@mui/material';
import React from 'react';
import { ButtonProps as ButtonProps$1 } from '@mui/material/Button';
import { TextFieldProps as TextFieldProps$1 } from '@mui/material/TextField';
import { TypographyProps as TypographyProps$1 } from '@mui/material/Typography';
import { CardProps as CardProps$1 } from '@mui/material/Card';
import { CardContentProps } from '@mui/material/CardContent';
import { CardHeaderProps } from '@mui/material/CardHeader';
import { CardActionsProps } from '@mui/material/CardActions';
import { ChipProps as ChipProps$1 } from '@mui/material/Chip';
import { BadgeProps as BadgeProps$1 } from '@mui/material/Badge';

declare module '@mui/material/styles' {
    interface PaletteColor {
        darker?: string;
        lighter?: string;
    }
    interface SimplePaletteColorOptions {
        darker?: string;
        lighter?: string;
    }
}
declare const theme: _mui_material.Theme;

interface ButtonProps extends Omit<ButtonProps$1, 'variant'> {
    variant?: 'contained' | 'outlined' | 'text';
    loading?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;

type TextFieldProps = TextFieldProps$1;
declare const TextField: React.ForwardRefExoticComponent<(Omit<_mui_material.OutlinedTextFieldProps, "ref"> | Omit<_mui_material.FilledTextFieldProps, "ref"> | Omit<_mui_material.StandardTextFieldProps, "ref">) & React.RefAttributes<HTMLDivElement>>;

type TypographyProps = TypographyProps$1;
declare const Typography: React.ForwardRefExoticComponent<Omit<TypographyProps, "ref"> & React.RefAttributes<HTMLElement>>;

type CardProps = CardProps$1;
declare const Card: React.ForwardRefExoticComponent<Omit<CardProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const CardContent: React.ForwardRefExoticComponent<Omit<CardContentProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const CardHeader: React.ForwardRefExoticComponent<Omit<CardHeaderProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const CardActions: React.ForwardRefExoticComponent<Omit<CardActionsProps, "ref"> & React.RefAttributes<HTMLDivElement>>;

type ChipProps = ChipProps$1;
declare const Chip: React.ForwardRefExoticComponent<Omit<ChipProps, "ref"> & React.RefAttributes<HTMLDivElement>>;

type BadgeProps = BadgeProps$1;
declare const Badge: React.ForwardRefExoticComponent<Omit<BadgeProps, "ref"> & React.RefAttributes<HTMLSpanElement>>;

export { Badge, type BadgeProps, Button, type ButtonProps, Card, CardActions, CardContent, CardHeader, type CardProps, Chip, type ChipProps, TextField, type TextFieldProps, Typography, type TypographyProps, theme };
