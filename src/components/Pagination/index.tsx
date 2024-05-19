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

  const elementsOfViewPage = 5;

  const [viewStartPage, setViewStartPage] = React.useState(0);
  const [viewLastPage, setViewLastPage] = React.useState(5);

  const navigateNextViewPage = () => {
    setViewStartPage((start) => start + elementsOfViewPage);
    setViewLastPage((last) => last + elementsOfViewPage);
    onPageChange(viewStartPage + elementsOfViewPage + 1);
  };

  const navigatePrevViewPage = () => {
    setViewStartPage((start) => start - elementsOfViewPage);
    setViewLastPage((last) => last - elementsOfViewPage);
    onPageChange(viewStartPage - elementsOfViewPage + 1);
  };

  return (
    <PageContainer>
      {viewStartPage > 0 && (
        <PageButton onClick={navigatePrevViewPage}>&lt;</PageButton>
      )}
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
      }).slice(viewStartPage, Math.min(viewLastPage, totalPage))}
      {totalPage > viewLastPage && (
        <PageButton onClick={navigateNextViewPage}>&gt;</PageButton>
      )}
    </PageContainer>
  );
};

export default Pagination;
