export interface GameTurn{
  square: { rowIndex: number; colIndex: number };
  player: string;
}
export interface PlayerState{ X: string; O: string; }
export interface TableMatrix {
  row: number;
  column: number;
};
