// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.180.0
//   protoc               v3.21.8
// source: protos/auth.proto

/* eslint-disable */
import { Observable } from "rxjs";

export const protobufPackage = "authproto";

export interface LoginRequest {
  account: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  userId: number;
  account: string;
  expiresIn: number;
}

export interface ValidateUserRequest {
  userId: number;
}

export interface TokenRequest {
  userId: number;
  account: string;
}

export interface TokenResponse {
  accessToken: string;
  expiresIn: number;
}

export interface AuthService {
  login(request: LoginRequest): Observable<LoginResponse>;
  validateUser(request: ValidateUserRequest): Observable<LoginResponse>;
  creatToken(request: TokenRequest): Observable<TokenResponse>;
}
