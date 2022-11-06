export interface TWords {
  id: number;
  word: string;
  pos: string;
}
export interface TWordsBody {
  list_length?: number;
}
export interface TRanks {
  rank: number;
}
export interface TRankBody {
  score: number;
}
export interface TNotification {
  title: string;
  show: boolean;
  isError?: boolean;
}
