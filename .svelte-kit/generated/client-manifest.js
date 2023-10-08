export { matchers } from './client-matchers.js';

export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15')];

export const server_loads = [];

export const dictionary = {
	"": [~5],
	"(auth)/forgot-password": [6,[2]],
	"(auth)/login": [7,[2]],
	"(auth)/reset-password": [8,[2]],
	"(auth)/signup": [9,[2]],
	"(dashboard)/clients": [10,[3]],
	"(dashboard)/invoices": [12,[3]],
	"settings": [15],
	"(dashboard)/invoices/thanks": [14],
	"(dashboard)/clients/[id]": [11,[3]],
	"(dashboard)/invoices/[id]": [13,[4]]
};