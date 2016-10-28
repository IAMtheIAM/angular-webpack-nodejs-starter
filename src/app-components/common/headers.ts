import { Headers } from '@angular/http';
import { Injectable } from '@angular/core';
var jwt = localStorage.getItem('jwt');

export const contentHeaders = new Headers();
contentHeaders.append('Accept', 'application/json');
contentHeaders.append('Content-Type', 'application/json');
// contentHeaders.append('Authorization:', `Bearer ${jwt}`);
