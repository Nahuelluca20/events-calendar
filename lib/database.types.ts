export type Json = string | number | boolean | null | {[key: string]: Json | undefined} | Json[];

export interface Database {
  public: {
    Tables: {
      events: {
        Row: {
          created_at: string;
          date_event: string;
          event_description: string;
          event_name: string;
          id: number;
          topic: string;
        };
        Insert: {
          created_at?: string;
          date_event: string;
          event_description: string;
          event_name?: string;
          id?: number;
          topic: string;
        };
        Update: {
          created_at?: string;
          date_event?: string;
          event_description?: string;
          event_name?: string;
          id?: number;
          topic?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
