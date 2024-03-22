export interface ShortButtonProps {
  message: string;
  color: 'white' | 'black';
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
