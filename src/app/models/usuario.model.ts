export interface GetUsersRes {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Usuario[];
  ad: Ad;
}

interface Ad {
  company: string;
  url: string;
  text: string;
}

export interface Usuario {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface GetUserRes {
  data: Usuario;
  ad: Ad;
}

interface Ad {
  company: string;
  url: string;
  text: string;
}

