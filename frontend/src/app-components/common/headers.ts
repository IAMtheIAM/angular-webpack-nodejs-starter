import { Headers } from '@angular/http';
import { Injectable } from '@angular/core';

export const contentHeaders = new Headers();
contentHeaders.append('Accept', 'application/json');
contentHeaders.append('Content-Type', 'application/json');
