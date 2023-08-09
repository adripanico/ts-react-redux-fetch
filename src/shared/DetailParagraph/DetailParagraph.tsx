import { ReactNode } from 'react';

interface IDetailParagraphProps {
  label: string;
  value: string | ReactNode;
}

export const DetailParagraph = ({ label, value }: IDetailParagraphProps) => {
  return (
    <p>
      {label}: <strong>{value}</strong>
    </p>
  );
};
