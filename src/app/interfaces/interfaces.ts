

export interface Promotion {
    id: number;
    title: string;
    price: string;
}

export interface PromotionDetail {

    title: string;
    price: string;
    address: string;
    latitude: string;
    longitude: string;

  }

export interface PaginationData {

    current_page: number;
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url: string;
    to: number;
    total: number;

}

