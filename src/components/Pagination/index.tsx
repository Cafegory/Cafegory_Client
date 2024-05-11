import React from 'react';
import {
  PageButton,
  PageContainer,
  CurrentPageButton,
} from './Pagination.style';
import { PaginationProps } from './Pagination.type';

const Pagination: React.FC<PaginationProps> = ({
  totalPage,
  currentPage,
  onPageChange,
}) => {
  const handleClick = (page: number) => {
    onPageChange(page);
  };

  return (
    <PageContainer>
      {Array.from(Array(totalPage), (_, index) => {
        if (currentPage === index + 1) {
          return <CurrentPageButton key={index}>{index + 1}</CurrentPageButton>;
        } else {
          return (
            <PageButton onClick={() => handleClick(index + 1)} key={index}>
              {index + 1}
            </PageButton>
          );
        }
      })}
    </PageContainer>
  );
};

export default Pagination;
