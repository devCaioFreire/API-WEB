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
    where?: Record<string, string | number | boolean| {gte : Date}| {lt : Date}>;
    take?: number;
    skip?: number;
    orderBy?: any;
    }