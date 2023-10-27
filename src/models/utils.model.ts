/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ParamProps {
    field: string;
    value: any;
    }
    
export interface ParamFilter {
    field: string;
    value: any;
    }
    
export interface IQuery {
    where?: Record<string, string | number | boolean>;
    take?: number;
    skip?: number;
    orderBy?: any;
    }