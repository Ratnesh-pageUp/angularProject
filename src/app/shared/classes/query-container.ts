export class QueryContainer {
    isPaginate: boolean = true;
    sortBy: string = 'created_at';
    sortOrder: string = 'desc';
    top: number = 10;
    dateFrom?: string;
    dateTo?: string;
    searchText?: string;
    skip: number = 0;
  }