// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.180.0
//   protoc               v3.21.8
// source: user.proto

/* eslint-disable */
import { Observable } from "rxjs";

export const protobufPackage = "userproto";

export interface getBooksRequest {
}

export interface getUsersResponse {
  users: User[];
}

export interface User {
  id: number;
  name: string;
  createdAt: Date | undefined;
}

export interface Order {
  id: number;
  itemTypes: number[];
}

export interface UserService {
  getUsers(request: getBooksRequest): Observable<getUsersResponse>;
  find(request: Order): Promise<Order>;
  sync(request: Observable<Order>): Observable<Order>;
  syncCall(request: Observable<Order>): Observable<Order>;
  streamReq(request: Observable<Order>): Promise<Order>;
  streamReqCall(request: Observable<Order>): Promise<Order>;
}
