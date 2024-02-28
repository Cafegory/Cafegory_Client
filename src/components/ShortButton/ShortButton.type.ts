// ShortButton.type.ts
export interface ShortButtonProps {
  message: string;
  color: 'white' | 'black';
  onClick?: () => void; // 클릭 이벤트를 위한 onClick prop 추가
}
