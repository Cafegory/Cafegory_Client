export interface PaginationProps {
    totalPage: number;
    currentPage:number;
    onPageChange: (page: number) => void;
  }