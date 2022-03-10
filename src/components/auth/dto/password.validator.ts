import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

@ValidatorConstraint({ name: 'Password validation', async: false })
export class PasswordValidator implements ValidatorConstraintInterface {
  validate(text: string, args: ValidationArguments) {
    return 8 < text.length &&
      text.length < 20 &&
      /\d/.test(text) &&
      /[A-Z]/.test(text) &&
      /[a-z]/.test(text);
  }

  defaultMessage(args: ValidationArguments) {
    return 'Le mot de passe doit contenir au moins 1 chiffre, 1 minuscule, 1 majuscule et avoir une longueur entre 8 et 20 caractères.';
  }
}
